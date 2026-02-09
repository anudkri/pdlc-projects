const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const NotesPage = require('../pages/notes.page');

const notesPage = new NotesPage();

Given('I am on the notes application homepage', async () => {
  await notesPage.openHomePage();
});

When('I click the {string} button', async (buttonName) => {
  await notesPage.clickNewNoteButton();
});

Then('a new note should appear in an editable text area', async () => {
  const isTextAreaVisible = await notesPage.isTextAreaVisible();
  expect(isTextAreaVisible).toBeTruthy();
});

When('I do not click the {string} button', async (buttonName) => {
  // Intentionally left blank for negative testing
});

Then('no new editable text area should appear', async () => {
  const isTextAreaVisible = await notesPage.isTextAreaVisible();
  expect(isTextAreaVisible).toBeFalsy();
});

When('I create a new note with text {string}', async (noteText) => {
  await notesPage.createNoteWithText(noteText);
});

When('I wait for the auto-save duration', async () => {
  await notesPage.waitForAutosavePeriod();
});

Then('the note should be saved automatically', async () => {
  const isNoteSaved = await notesPage.isNoteAutosaved();
  expect(isNoteSaved).toBeTruthy();
});