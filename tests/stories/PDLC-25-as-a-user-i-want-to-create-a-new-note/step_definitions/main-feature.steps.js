const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { NotesPage } = require('../pages/notes.page');

Given('the user is on the Notes page', async function() {
  this.notesPage = new NotesPage(this.page);
  await this.notesPage.open();
});

When('the user enters a title {string} and a body {string}', async function(title, body) {
  await this.notesPage.enterTitle(title);
  await this.notesPage.enterBody(body);
});

When('the user enters a body {string} but leaves the title empty', async function(body) {
  await this.notesPage.enterTitle('');
  await this.notesPage.enterBody(body);
});

When('the user enters a title {string} but leaves the body empty', async function(title) {
  await this.notesPage.enterTitle(title);
  await this.notesPage.enterBody('');
});

When('the user saves the note', async function() {
  await this.notesPage.saveNote();
});

When('the user attempts to save the note', async function() {
  await this.notesPage.attemptToSaveNote();
});

Then('the note is added to the user\'s note list', async function() {
  const isNotePresent = await this.notesPage.isNoteInList('Sample Note Title');
  expect(isNotePresent).toBeTruthy();
});

Then('an error message {string} is displayed', async function(errorMessage) {
  const errorText = await this.notesPage.getErrorText();
  expect(errorText).toBe(errorMessage);
});