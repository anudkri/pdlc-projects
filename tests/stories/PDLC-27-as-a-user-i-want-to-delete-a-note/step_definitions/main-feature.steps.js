const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const NotesPage = require('../pages/notes.page');

Given('the user is logged in and on the notes page', async function() {
  await this.page.goto('https://example.com/login');
  // Assume login process is handled here
  await this.page.goto('https://example.com/notes');
  await expect(this.page.url()).toContain('/notes');
});

When('the user selects a note to delete', async function() {
  const notesPage = new NotesPage(this.page);
  await notesPage.selectNoteToDelete();
});

When('confirms the deletion action', async function() {
  const notesPage = new NotesPage(this.page);
  await notesPage.confirmDeletion();
});

When('cancels the deletion action', async function() {
  const notesPage = new NotesPage(this.page);
  await notesPage.cancelDeletion();
});

Then('the note is removed from the user\'s note list', async function() {
  const notesPage = new NotesPage(this.page);
  expect(await notesPage.isNotePresent()).toBeFalsy();
});

Then('the note remains in the user\'s note list', async function() {
  const notesPage = new NotesPage(this.page);
  expect(await notesPage.isNotePresent()).toBeTruthy();
});

When('the user tries to delete a non-existent note', async function() {
  const notesPage = new NotesPage(this.page);
  await notesPage.tryToDeleteNonExistentNote();
});

Then('the system should show an error message', async function() {
  const notesPage = new NotesPage(this.page);
  expect(await notesPage.isErrorMessageVisible()).toBeTruthy();
});

Then('no changes are made to the user\'s note list', async function() {
  const notesPage = new NotesPage(this.page);
  expect(await notesPage.isListUnchanged()).toBeTruthy();
});