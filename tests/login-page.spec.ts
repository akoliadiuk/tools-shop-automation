import { BASE_URL, USER_EMAIL, USER_PASSWORD } from '../playwright.config';
import { test } from './fixtures';

const PAGE_TITLE: RegExp = /Login - Practice Software Testing/;
const WRONG_EMAIL = 'wrong.email.does.not.exist@gmail.com';
const WRONG_PASSWORD = 'UBUW7f2338FG';

test.describe('Login Page', () => {
    test('basic elements @smoke', async ({ loginPage }) => {
        await test.step('title', async () =>
            loginPage.shouldTitleBe(PAGE_TITLE));

        await test.step('title', async () =>
            loginPage.shouldTitleBe(PAGE_TITLE));

        await test.step('header logo', async () =>
            loginPage.shouldLogoBeVisible());

        await test.step('username field', async () =>
            loginPage.shouldLogoBeVisible());

        await test.step('continue button', async () =>
            loginPage.shouldLogoBeVisible());
    });

    test('invalid credentials error @regression', async ({ loginPage }) => {
        await loginPage.login(WRONG_EMAIL, WRONG_PASSWORD);
        
        await loginPage.shouldErrorMessageBe('Invalid email or password');
    });

    test('successful login @regression', async ({ loginPage, accountPage }) => {
        await loginPage.login(USER_EMAIL, USER_PASSWORD);
        
        await accountPage.shouldUrlBe(accountPage.url);
        await accountPage.shouldPageTitleBeVisible();
    });
});
