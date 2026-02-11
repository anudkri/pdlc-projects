import { test, expect } from '@playwright/test';

test.describe('Feature: Note Sorting', () => {
  test('Verify sorting of notes by date created in ascending order', async ({ page }) => {
    // Step 1: Navigate to the application (base URL)
    try {
      await page.goto('https://example.com/login'); // Replace with actual URL
    } catch (error) {
      console.error('Failed to navigate to the login page:', error);
      return;
    }

    // Step 2: Simulate user login
    await page.fill('#username', 'testuser'); // Replace with actual selector and username
    await page.fill('#password', 'password'); // Replace with actual selector and password
    await page.click('#loginButton'); // Replace with actual selector
    await page.waitForNavigation({ timeout: 10000 });

    // Step 3: Navigate to the notes section
    try {
      await page.goto('https://example.com/notes'); // Replace with actual URL
    } catch (error) {
      console.error('Failed to navigate to the notes section:', error);
      return;
    }

    // Step 4: Select the option to sort notes by date created
    await page.click('#sortOptions'); // Replace with actual selector
    await page.click('#sortByDateCreated'); // Replace with actual selector

    // Step 5: Choose 'Ascending' order for sorting
    await page.click('#ascendingOrder'); // Replace with actual selector

    // Step 6: Verify that notes are displayed in ascending order
    const notes = await page.$$eval('.note', notes =>
      notes.map(note => ({
        dateCreated: new Date(note.querySelector('.dateCreated')?.textContent || '')
      }))
    );

    for (let i = 0; i < notes.length - 1; i++) {
      expect(notes[i].dateCreated <= notes[i + 1].dateCreated, `Note at index ${i} is not in ascending order`).toBeTruthy();
    }
  });
});