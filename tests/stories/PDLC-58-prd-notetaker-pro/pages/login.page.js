const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login-button');
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginMessage = page.locator('.alert-success');
    this.errorMessage = page.locator('.alert-error');
  }
  async navigateToLoginPage() {
    await this.page.goto('https://notetakerpro.app/login');
  }
  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
  async verifyRedirectedToNotesPage() {
    await expect(this.page).toHaveURL('https://notetakerpro.app/notes');
  }
  async verifyLoginMessage(message) {
    await expect(this.loginMessage).toHaveText(message);
  }
  async verifyLoginErrorMessage(message) {
    await expect(this.errorMessage).toHaveText(message);
  }
}
module.exports = LoginPage;