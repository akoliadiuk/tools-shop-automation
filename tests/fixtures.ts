import { test as baseTest, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import { existsSync } from 'fs';
import SignInPage from '../pages/SignInPage';
import AccountPage from '../pages/AccountPage';

interface Fixtures {
    homePage: HomePage;
    loginPage: SignInPage;
    accountPage: AccountPage;
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

    accountPage: async ({ page }, use) => {
        const accountPage = new AccountPage(page);
        await accountPage.open();
        await use(accountPage);
        await accountPage.close();
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
