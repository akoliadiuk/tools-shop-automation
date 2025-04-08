import { test } from './fixtures';

const PAGE_TITLE: RegExp = /Login - Practice Software Testing/;

test.describe('Login Page', () => {
    test('basic elements @smoke', async ({ loginPage }) => {
        await test.step('title', async () =>
            loginPage.shouldTitleBe(PAGE_TITLE));

        await test.step('header logo', async () =>
            loginPage.shouldLogoBeVisible());

        await test.step('username field', async () =>
            loginPage.shouldLogoBeVisible());

        await test.step('continue button', async () =>
            loginPage.shouldLogoBeVisible());
    });
});
