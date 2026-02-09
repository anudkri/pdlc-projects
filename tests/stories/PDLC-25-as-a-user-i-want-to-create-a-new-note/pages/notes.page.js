class NotesPage {
  constructor(page) {
    this.page = page;
    this.titleInput = page.locator('#note-title');
    this.bodyInput = page.locator('#note-body');
    this.saveButton = page.locator('#save-note');
    this.notesList = page.locator('.note-list');
    this.errorMessage = page.locator('.error-message');
  }

  async open() {
    await this.page.goto('/notes');
  }

  async enterTitle(title) {
    await this.titleInput.fill(title);
  }

  async enterBody(body) {
    await this.bodyInput.fill(body);
  }

  async saveNote() {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async attemptToSaveNote() {
    await this.saveButton.click();
  }

  async isNoteInList(title) {
    const notes = await this.notesList.allTextContents();
    return notes.includes(title);
  }

  async getErrorText() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { NotesPage };