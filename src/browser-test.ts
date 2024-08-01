import {browser, Locator, Page} from 'k6/browser'
import {check} from "k6";
// import {LoginPage} from "./page_objects/login-page.ts";

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
    // Arrange
    const context = await browser.newContext();
    const page = await context.newPage();
    const login_page = new LoginPage(page);

    try {
        // Act
        await login_page.gotoLoginPage();
        await login_page.login("admin", "123");

        // Assert
        const headerText = await page.locator('h2').textContent();
        check(headerText, {
            'Header text is ok': (headerText) => headerText === 'Welcome, admin!',
        });

    } finally {
        await page.close();
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

    public async login(username: string, password: string): Promise<void> {
        await Promise.all([
            this.loginTextField.fill(username),
            this.passwordField.fill(password),
            this.loginButton.click()
        ])
    }

    public async gotoLoginPage() {
        return await this.page.goto("https://test.k6.io/my_messages.php");
    }
}