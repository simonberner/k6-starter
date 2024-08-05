import {browser, Locator, Page} from 'k6/browser'
import {check, sleep} from "k6";
// import {LoginPage} from "../page_objects/login-page";

export const options = {
    scenarios: {
        ui: {
            executor: 'shared-iterations',
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
    },
    thresholds: {
        checks: ['rate==1.0'],
    },
};

export default async function browserTest() {
    // Given
    const context = await browser.newContext();
    const page = await context.newPage();
    const login_page = new LoginPage(page);

    try {
        // When
        await login_page.goto();
        await login_page.login("admin", "123");

        // Then
        const headerText = await login_page.getHeaderText();
        check(headerText, {
            'Header text is ok': (ht) => ht === 'Welcome, admin!',
        });

    } finally {
        await context.close();
    }
}

/*
Page Object Model is a well-known pattern to abstract a web page.

The Locator API enables using the Page Object Model pattern to organize
and simplify test code.
 */
class LoginPage {

    private page: Page;
    private loginTextField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginTextField = page.locator('input[name="login"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
    }

    async login(username: string, password: string): Promise<void> {
        await Promise.all([
            this.loginTextField.fill(username),
            this.passwordField.fill(password),
            this.loginButton.click()
        ])
    }

    async goto() {
        return this.page.goto("https://test.k6.io/my_messages.php");
    }

    async getHeaderText() {
        sleep(0.4); // wait in order to get the text content of h2
        return this.page.locator('h2').textContent();
    }
}