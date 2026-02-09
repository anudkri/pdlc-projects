const { expect } = require('@playwright/test');

class NotesPage {
  constructor(page) {
    this.page = page;
    this.newNoteButton = page.locator('button#new-note');
    this.textArea = page.locator('textarea#note-content');
    this.autosaveIndicator = page.locator('#autosave-indicator');
  }

  async openHomePage() {
    await this.page.goto('http://localhost:3000');
  }

  async clickNewNoteButton() {
    await this.newNoteButton.click();
  }

  async isTextAreaVisible() {
    return this.textArea.isVisible();
  }

  async createNoteWithText(noteText) {
    await this.textArea.fill(noteText);
  }

  async waitForAutosavePeriod() {
    await this.page.waitForTimeout(5000); // Assuming autosave time is 5 seconds
  }

  async isNoteAutosaved() {
    return this.autosaveIndicator.isVisible();
  }
}

module.exports = NotesPage;