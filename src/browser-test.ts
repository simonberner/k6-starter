import {browser} from 'k6/browser'
import {check} from "k6";

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

    try {
        // Act
        await page.goto("https://test.k6.io/my_messages.php");
        await page.locator('input[name="login"]').type("admin");
        await page.locator('input[name="password"]').type("123");
        await page.locator('input[type="submit"]').click();

        // or we could use:
        // await Promise.all([
        //     page.locator('input[type="submit"]').click()
        //     ...
        //     ...
        // ]);

        // Assert
        const headerText = await page.locator('h2').textContent();
        check(headerText, {
            'Header text is ok': (headerText) => headerText === 'Welcome, admin!',
        });

    } finally {
        await page.close();
    }
}