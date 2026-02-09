class NotePage {
  constructor(page) {
    this.page = page;
    this.noteList = page.locator('.note-list');
    this.titleInput = page.locator('#note-title');
    this.bodyInput = page.locator('#note-body');
    this.saveButton = page.locator('#save-note');
    this.errorMessage = page.locator('.error-message');
  }

  async createNoteIfNotExists(title, body) {
    if (!await this.doesNoteExist(title)) {
      await this.createNote(title, body);
    }
  }

  async doesNoteExist(title) {
    return await this.page.locator(`.note-list-item:has-text('${title}')`).count() > 0;
  }

  async createNote(title, body) {
    await this.page.click('#create-note');
    await this.titleInput.fill(title);
    await this.bodyInput.fill(body);
    await this.saveButton.click();
    await this.page.waitForSelector(`.note-list-item:has-text('${title}')`);
  }

  async selectNote() {
    await this.noteList.click();
  }

  async editTitle(newTitle) {
    await this.titleInput.fill(newTitle);
  }

  async editBody(newBody) {
    await this.bodyInput.fill(newBody);
  }

  async saveNote() {
    await this.saveButton.click();
  }

  async getNoteDetails() {
    return {
      title: await this.titleInput.inputValue(),
      body: await this.bodyInput.inputValue()
    };
  }

  async getErrorMessage() {
    return await this.errorMessage.innerText();
  }
}

module.exports = NotePage;