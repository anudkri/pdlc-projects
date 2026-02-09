const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage, NotePage } = require('../pages');
const testData = require('../data/test-data.json');

Given('a user has logged into their account', async function() {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateTo();
  await loginPage.login(testData.user.username, testData.user.password);
});

Given('a note exists with the title {string} and body {string}', async function(title, body) {
  const notePage = new NotePage(this.page);
  await notePage.createNoteIfNotExists(title, body);
});

When('the user selects the note', async function() {
  const notePage = new NotePage(this.page);
  await notePage.selectNote();
});

When('the user changes the title to {string}', async function(newTitle) {
  const notePage = new NotePage(this.page);
  await notePage.editTitle(newTitle);
});

When('the user changes the body to {string}', async function(newBody) {
  const notePage = new NotePage(this.page);
  await notePage.editBody(newBody);
});

When('the user saves the note', async function() {
  const notePage = new NotePage(this.page);
  await notePage.saveNote();
});

When('a network error occurs while saving', async function() {
  // Simulate network error if possible or use a mock service
  // This part depends on your testing environment capabilities
});

Then('the note should be updated with title {string} and body {string}', async function(expectedTitle, expectedBody) {
  const notePage = new NotePage(this.page);
  const note = await notePage.getNoteDetails();
  expect(note.title).toBe(expectedTitle);
  expect(note.body).toBe(expectedBody);
});

Then('the note should remain with title {string} and body {string}', async function(expectedTitle, expectedBody) {
  const notePage = new NotePage(this.page);
  const note = await notePage.getNoteDetails();
  expect(note.title).toBe(expectedTitle);
  expect(note.body).toBe(expectedBody);
});

Then('an error message should be displayed saying {string}', async function(expectedMessage) {
  const notePage = new NotePage(this.page);
  const errorMessage = await notePage.getErrorMessage();
  expect(errorMessage).toBe(expectedMessage);
});