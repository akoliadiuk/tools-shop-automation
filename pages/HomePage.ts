import { expect, Locator, Page } from '@playwright/test';
import APage from './APage';

export default class HomePage extends APage {
    protected readonly bannerImage: Locator;

    constructor(page: Page) {
        super(page, '');
        this.bannerImage = this.page.locator('app-overview img[alt="Banner"]');
    }

    async shouldBannerBeVisible(): Promise<void> {
        await expect(this.bannerImage).toBeVisible();
    }
}
