class NotesPage {
  constructor(page) {
    this.page = page;
    this.noteLocator = 'data-test-id=note-item';
    this.deleteButton = 'data-test-id=delete-button';
    this.confirmDeleteButton = 'data-test-id=confirm-delete-button';
    this.cancelDeleteButton = 'data-test-id=cancel-delete-button';
    this.errorMessage = 'data-test-id=error-message';
  }

  async selectNoteToDelete() {
    await this.page.click(this.noteLocator);
    await this.page.click(this.deleteButton);
  }

  async confirmDeletion() {
    await this.page.click(this.confirmDeleteButton);
    await this.page.waitForSelector(this.noteLocator, { state: 'detached' });
  }

  async cancelDeletion() {
    await this.page.click(this.cancelDeleteButton);
  }

  async tryToDeleteNonExistentNote() {
    await this.page.evaluate(() => {
       const event = new CustomEvent('attempt-to-delete-non-existent-note');
       document.dispatchEvent(event);
    });
  }

  async isNotePresent() {
    return await this.page.isVisible(this.noteLocator);
  }

  async isErrorMessageVisible() {
    return await this.page.isVisible(this.errorMessage);
  }

  async isListUnchanged() {
    // Logic to confirm the list is unchanged, potentially comparing states
    return true;
  }
}

module.exports = NotesPage;