import { test as baseTest, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import { existsSync } from 'fs';
import SignInPage from '../pages/SignInPage';

interface Fixtures {
    homePage: HomePage;
    loginPage: SignInPage;
    userToLogin?: string;
}

const test = baseTest.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await use(homePage);
        await homePage.close();
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new SignInPage(page);
        await loginPage.open();
        await use(loginPage);
        await loginPage.close();
    },
});

test.afterEach(async ({ page }, testInfo) => {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('screenshot', {
        body: screenshot,
        contentType: 'image/png',
    });
});

export { test, expect };
