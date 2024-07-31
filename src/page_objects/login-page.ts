import {Locator, Page} from "k6/browser";

/*
Page Object Model is a well-known pattern to abstract a web page.

The Locator API enables using the Page Object Model pattern to organize
and simplify test code.
 */
export class LoginPage {

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