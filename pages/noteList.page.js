const { expect } = require('@playwright/test');
class NoteListPage {
  constructor(page) {
    this.page = page;
    this.newNoteButton = 'button#new-note';
    this.noteTitleInput = 'input#note-title';
    this.noteContentInput = 'textarea#note-content';
    this.saveNoteButton = 'button#save-note';
    this.confirmDeleteButton = 'button#confirm-delete';
    this.deleteConfirmationModal = '.delete-confirmation';
  }
  async isVisible() {
    return await this.page.isVisible(this.newNoteButton);
  }
  async clickNewNote() {
    await this.page.click(this.newNoteButton);
  }
  async enterNoteTitle(title) {
    await this.page.fill(this.noteTitleInput, title);
  }
  async enterNoteContent(content) {
    await this.page.fill(this.noteContentInput, content);
  }
  async saveNote() {
    await this.page.click(this.saveNoteButton);
  }
  async isNoteVisible(title) {
    return await this.page.isVisible(`text=${title}`);
  }
  async openNoteEditor(title) {
    await this.page.click(`text=${title}`);
  }
  async modifyNoteContent(content) {
    await this.page.fill(this.noteContentInput, content);
  }
  async isNoteContentUpdated(title, content) {
    await this.openNoteEditor(title);
    return await this.page.inputValue(this.noteContentInput) === content;
  }
  async deleteNote(title) {
    await this.page.click(`button#delete-${title}`);
  }
  async deleteConfirmationVisible() {
    return await this.page.isVisible(this.deleteConfirmationModal);
  }
  async confirmDelete() {
    await this.page.click(this.confirmDeleteButton);
  }
}
module.exports = NoteListPage;