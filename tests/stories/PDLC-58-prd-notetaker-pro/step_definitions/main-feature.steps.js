const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const NotePage = require('../pages/note.page');

Given('the user is on the login page', async function () {
  await LoginPage.navigateToLoginPage();
});

When('the user enters valid credentials', async function () {
  await LoginPage.login('validUsername', 'validPassword');
});

Then('the user should be redirected to the note list page', async function () {
  await LoginPage.verifyRedirectedToNotesPage();
});

Then('a message {string} is displayed', async function (message) {
  await LoginPage.verifyLoginMessage(message);
});

When('the user enters invalid credentials', async function () {
  await LoginPage.login('invalidUsername', 'invalidPassword');
});

Then('an error message {string} is displayed', async function (message) {
  await LoginPage.verifyLoginErrorMessage(message);
});

When('the user creates a new note with title {string} and body {string}', async function (title, body) {
  await NotePage.createNewNote(title, body);
});

Then('the note should appear in the user\'s note list with the correct title', async function () {
  await NotePage.verifyNoteInList('Meeting Notes');
});

When('the user creates a new tag {string}', async function (tagName) {
  await NotePage.createTag(tagName);
});

When('applies the tag to an existing note', async function () {
  await NotePage.applyTagToNote();
});

Then('the note should be displayed under the {string} tag', async function (tagName) {
  await NotePage.verifyNoteUnderTag(tagName);
});

When('the user searches for {string}', async function (keyword) {
  await NotePage.searchForNotes(keyword);
});

Then('the search results should include notes with the keyword {string}', async function (keyword) {
  await NotePage.verifySearchResults(keyword);
});

Given('the user opens an existing note', async function () {
  await NotePage.openExistingNote();
});

When('the user updates the note\'s body', async function () {
  await NotePage.editNoteBody('Updated information');
});

Then('the changes should be saved and visible in the note list', async function () {
  await NotePage.verifyNoteUpdated('Updated information');
});