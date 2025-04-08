import { Page, Locator } from '@playwright/test';
import { BASE_URL } from '../playwright.config';
import { expect } from '../tests/fixtures';

export default abstract class APage {
    private fullUrl!: URL;
    protected readonly logoHeader: Locator;
    public page: Page;

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
        this.logoHeader = this.page.locator('a.navbar-brand svg');
    }

    get url(): string {
        return this.fullUrl.href;
    }

    protected set url(path: string) {
        try {
            this.fullUrl = new URL(path, BASE_URL);
        } catch (error) {
            throw new Error(`Unable to create a URL from path parameter: "${path}"!
        ${(error as Error)?.stack ?? error}`);
        }
    }

    async open(): Promise<void> {
        await this.page.goto(this.url);
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    //#region Assertions
    async shouldTitleBe(expectedTitle: string | RegExp): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async shouldLogoBeVisible(): Promise<void> {
        await expect(this.logoHeader).toBeVisible();
    }
    //#endregion
}
