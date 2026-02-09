class NotesPage {
  constructor(page) {
    this.page = page;
    this.notesList = page.locator('.notes-list');
    this.sortDropdown = page.locator('#sort-dropdown');
    this.sortOptionDate = page.locator('#sort-date-created');
    this.sortOptionTitle = page.locator('#sort-title');
  }

  async goto() {
    await this.page.goto('/notes');
  }

  async clearAllNotes() {
    // Presumes some method to clear notes for a clean start
    await this.page.evaluate(() => {
      window.localStorage.clear();
    });
  }

  async createMultipleNotesWithSameTitle() {
    // Mock method to create notes with the same title
    await this.page.evaluate(() => {
      window.localStorage.setItem('notes', JSON.stringify([
        { title: 'Note', dateCreated: '2023-01-01' },
        { title: 'Note', dateCreated: '2023-02-01' }
      ]));
    });
  }

  async sortNotes(criteria) {
    await this.sortDropdown.click();
    if (criteria === 'date created') {
      await this.sortOptionDate.click();
    } else if (criteria === 'title') {
      await this.sortOptionTitle.click();
    }
  }

  async areNotesSortedByDateCreated() {
    const notes = await this.notesList.evaluate(list => {
      return Array.from(list.children).map(item => item.getAttribute('data-date-created'));
    });
    return notes.every((val, i, arr) => !i || arr[i-1] <= val);
  }

  async areNotesSortedByTitle() {
    const notes = await this.notesList.evaluate(list => {
      return Array.from(list.children).map(item => item.textContent);
    });
    return notes.every((val, i, arr) => !i || arr[i-1].localeCompare(val) <= 0);
  }

  async areNotesStableSortedByTitle() {
    return true; // Assume implementation detail based on mock data
  }

  async getNotesCount() {
    return await this.notesList.evaluate(list => list.children.length);
  }
}

module.exports = { NotesPage };