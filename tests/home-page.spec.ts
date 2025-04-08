import { BASE_URL } from '../playwright.config';
import { test } from './fixtures';

const PAGE_TITLE: RegExp = /Practice Software Testing/;

test.describe('Home Page', () => {
    test(`URL is ${BASE_URL} @smoke`, async ({ homePage }) =>
        homePage.shouldUrlBe(BASE_URL));

    test('basic elements @smoke', async ({ homePage }) => {
        await test.step('title', async () =>
            homePage.shouldTitleBe(PAGE_TITLE));

        await test.step('header logo', async () =>
            homePage.shouldLogoBeVisible());

        await test.step('banner', async () =>
            homePage.shouldLogoBeVisible());
    });
});
