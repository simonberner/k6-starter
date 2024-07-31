import {browser} from 'k6/browser'
import {check} from "k6";
import {LoginPage} from "./page_objects/login-page";

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