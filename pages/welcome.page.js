const { expect } = require('@playwright/test');
class WelcomePage {
  constructor(page) {
    this.page = page;
    this.signUpButton = 'button#sign-up';
    this.emailInput = 'input#email';
    this.passwordInput = 'input#password';
    this.submitButton = 'button#submit';
    this.emailError = 'span#email-error';
    this.passwordError = 'span#password-error';
    this.loginError = 'span#login-error';
  }
  async goto() {
    await this.page.goto('https://noteease.app');
  }
  async clickSignUp() {
    await this.page.click(this.signUpButton);
  }
  async enterEmail(email) {
    await this.page.fill(this.emailInput, email);
  }
  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }
  async submit() {
    await this.page.click(this.submitButton);
  }
  async emailErrorVisible() {
    return await this.page.isVisible(this.emailError);
  }
  async passwordErrorVisible() {
    return await this.page.isVisible(this.passwordError);
  }
  async loginErrorVisible() {
    return await this.page.isVisible(this.loginError);
  }
}
module.exports = WelcomePage;