const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const WelcomePage = require('../../pages/welcome.page');
const NoteListPage = require('../../pages/noteList.page');

Given('I am on the Welcome screen', async function () {
  await WelcomePage.goto();
});

When('I click on the Sign Up button', async function () {
  await WelcomePage.clickSignUp();
});

When('I enter a valid email and password', async function () {
  await WelcomePage.enterEmail('test@example.com');
  await WelcomePage.enterPassword('StrongPass123!');
  await WelcomePage.submit();
});

Then('I should be registered and logged into the app', async function () {
  await expect(NoteListPage.isVisible()).toBeTruthy();
});

When('I enter an invalid email {string}', async function (email) {
  await WelcomePage.enterEmail(email);
  await WelcomePage.submit();
});

Then('I should see an error message for invalid email format', async function () {
  await expect(WelcomePage.emailErrorVisible()).toBeTruthy();
});

When('I enter a password {string}', async function (password) {
  await WelcomePage.enterPassword(password);
  await WelcomePage.submit();
});

Then('I should see an error message for weak password', async function () {
  await expect(WelcomePage.passwordErrorVisible()).toBeTruthy();
});

When('I enter an invalid email or password', async function () {
  await WelcomePage.enterEmail('wrong@example.com');
  await WelcomePage.enterPassword('WrongPass!');
  await WelcomePage.submit();
});

Then('I should see an error prompt for incorrect credentials', async function () {
  await expect(WelcomePage.loginErrorVisible()).toBeTruthy();
});

When('I click on the New Note button', async function () {
  await NoteListPage.clickNewNote();
});

When('I enter {string} and {string}', async function (title, content) {
  await NoteListPage.enterNoteTitle(title);
  await NoteListPage.enterNoteContent(content);
  await NoteListPage.saveNote();
});

Then('the note should be saved and appear in the note list', async function () {
  await expect(NoteListPage.isNoteVisible('My Note Title')).toBeTruthy();
});

When('I select a note and modify its content', async function () {
  await NoteListPage.openNoteEditor('My Note Title');
  await NoteListPage.modifyNoteContent('Updated content');
  await NoteListPage.saveNote();
});

Then('the note should be updated with the new content', async function () {
  await expect(NoteListPage.isNoteContentUpdated('My Note Title', 'Updated content')).toBeTruthy();
});

When('I delete a note', async function () {
  await NoteListPage.deleteNote('My Note Title');
});

Then('I should be prompted for confirmation', async function () {
  await expect(NoteListPage.deleteConfirmationVisible()).toBeTruthy();
});

Then('the note should be removed after confirmation', async function () {
  await NoteListPage.confirmDelete();
  await expect(NoteListPage.isNoteVisible('My Note Title')).toBeFalsy();
});