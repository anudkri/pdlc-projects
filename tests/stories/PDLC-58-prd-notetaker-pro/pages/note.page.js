const { expect } = require('@playwright/test');

class NotePage {
  constructor(page) {
    this.page = page;
    this.newNoteButton = page.locator('#new-note-button');
    this.noteTitleField = page.locator('#note-title');
    this.noteBodyField = page.locator('#note-body');
    this.saveNoteButton = page.locator('#save-note');
    this.noteInList = page.locator('.note-item');
    this.tagField = page.locator('#tag-name');
    this.applyTagButton = page.locator('#apply-tag');
    this.searchBox = page.locator('#search');
    this.searchResults = page.locator('.search-result');
  }
  async createNewNote(title, body) {
    await this.newNoteButton.click();
    await this.noteTitleField.fill(title);
    await this.noteBodyField.fill(body);
    await this.saveNoteButton.click();
  }
  async verifyNoteInList(title) {
    await expect(this.noteInList).toContainText(title);
  }
  async createTag(tagName) {
    await this.tagField.fill(tagName);
    await this.applyTagButton.click();
  }
  async applyTagToNote() {
    // Adding functionality for applying tag
  }
  async verifyNoteUnderTag(tagName) {
    // Verifying note under specific tag
  }
  async searchForNotes(keyword) {
    await this.searchBox.fill(keyword);
  }
  async verifySearchResults(keyword) {
    await expect(this.searchResults).toContainText(keyword);
  }
  async openExistingNote() {
    await this.noteInList.first().click();
  }
  async editNoteBody(newBody) {
    await this.noteBodyField.fill(newBody);
    await this.saveNoteButton.click();
  }
  async verifyNoteUpdated(updatedContent) {
    await expect(this.noteBodyField).toHaveValue(updatedContent);
  }
}
module.exports = NotePage;