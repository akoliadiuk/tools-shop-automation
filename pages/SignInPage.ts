import APage from './APage';
import { expect, Locator, Page } from '@playwright/test';

export default class SignInPage extends APage {
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page, '/auth/login');
        this.emailField = this.page.getByTestId('email');
        this.passwordField = this.page.getByTestId('password');
        this.loginButton = this.page.getByTestId('login-submit');
        this.errorMessage = this.page.getByTestId('login-error');
    }

    async login(username: string, password: string) {
        await this.open();
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async shouldErrorMessageBe(expectedErrorMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }
}
