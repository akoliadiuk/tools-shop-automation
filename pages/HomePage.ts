import { Page } from '@playwright/test';
import APage from './APage';

export default class HomePage extends APage {
    constructor(page: Page) {
        super(page, '');
    }
}
