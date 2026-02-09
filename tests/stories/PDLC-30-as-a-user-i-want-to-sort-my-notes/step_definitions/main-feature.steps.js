const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { NotesPage } = require('../pages/notes.page');

Given('I am on the notes page', async function() {
  this.notesPage = new NotesPage(this.page);
  await this.notesPage.goto();
});

Given('I am on the notes page with no notes', async function() {
  this.notesPage = new NotesPage(this.page);
  await this.notesPage.goto();
  await this.notesPage.clearAllNotes();
});

Given('I am on the notes page with multiple notes having the same title', async function() {
  this.notesPage = new NotesPage(this.page);
  await this.notesPage.goto();
  await this.notesPage.createMultipleNotesWithSameTitle();
});

When('I sort notes by {string}', async function(criteria) {
  await this.notesPage.sortNotes(criteria);
});

Then('the notes should be displayed in order of date created', async function() {
  const isSorted = await this.notesPage.areNotesSortedByDateCreated();
  expect(isSorted).toBe(true);
});

Then('the notes should be displayed in alphabetical order by title', async function() {
  const isSorted = await this.notesPage.areNotesSortedByTitle();
  expect(isSorted).toBe(true);
});

Then('no error is displayed and list remains empty', async function() {
  const notesCount = await this.notesPage.getNotesCount();
  expect(notesCount).toBe(0);
});

Then('the notes with identical titles should remain in their original order', async function() {
  const isStableSorted = await this.notesPage.areNotesStableSortedByTitle();
  expect(isStableSorted).toBe(true);
});
