import { expect, Locator, Page } from '@playwright/test';
import APage from './APage';
import { text } from 'stream/consumers';

export default class AccountPage extends APage {
    protected readonly bannerImage: Locator;
    protected readonly pageTitle: Locator;
    private readonly title = 'My account';

    constructor(page: Page) {
        super(page, '/account');
        this.bannerImage = this.page.locator('app-overview img[alt="Banner"]');
        this.pageTitle = this.page.getByTestId('page-title');
    }

    async shouldPageTitleBeVisible(): Promise<void> {
        await expect(this.pageTitle).toHaveText(this.title);
    }
}
