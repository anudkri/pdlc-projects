const { expect } = require('@playwright/test');

class AsAUser,IWantAClearButtonToResetTheCalcPage {
  constructor(page) {
    this.page = page;
    this.mainButton = page.locator('#main-button');
    this.inputField = page.locator('#input');
    this.submitButton = page.locator('#submit');
    this.resultElement = page.locator('#result');
    this.errorMessage = page.locator('.error-message');
  }

  async navigate() {
    await this.page.goto('http://localhost:3000');
  }

  async performMainAction() {
    await this.mainButton.click();
  }

  async fillInput(value) {
    await this.inputField.fill(value);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getResult() {
    return await this.resultElement.textContent();
  }

  async hasError() {
    return await this.errorMessage.isVisible();
  }

  async waitForResult() {
    await this.page.waitForSelector('#result', { state: 'visible' });
  }
}

module.exports = { AsAUser,IWantAClearButtonToResetTheCalcPage };
