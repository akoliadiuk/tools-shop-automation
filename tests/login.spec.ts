import { test } from './fixtures';

test.describe('Home Page', () => {
    test('basic elements @smoke', async ({ homePage }) => {
        await test.step('title', async () =>
            homePage.shouldTitleBe(/Practice Software Testing - Toolshop/));

        await test.step('header logo', async () =>
            homePage.shouldLogoBeVisible());
    });
});
