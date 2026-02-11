import { test, expect } from '@playwright/test';

test.describe('Notes Sorting', () => {

  // Assuming a helper function to log in
  async function loginUser(page) {
    await page.goto('https://yourapp.com/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
  }

  test('Verify sorting functionality with multiple notes', async ({ page }) => {

    // Given: User account with multiple notes created on different dates
    await loginUser(page);

    // When: Log in to the application., Navigate to the notes section.
    await page.goto('https://yourapp.com/notes');
    await page.waitForSelector('#notes-section', { state: 'visible' });

    // When: Select the option to sort notes by date created.
    await page.click('#sort-by-date');
    await page.waitForTimeout(1000); // Wait for sorting animation or process if any

    // Then: Notes are displayed in ascending order based on their creation date.
    const notes = await page.$$('#notes-section .note');
    const dates = await Promise.all(notes.map(async note => {
      const dateText = await note.getAttribute('data-created-date');
      if (!dateText) throw new Error('No date attribute found on note element');
      return new Date(dateText).getTime();
    }));

    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i]).toBeLessThanOrEqual(dates[i + 1], `Notes are not sorted correctly: Note at index ${i} is newer than note at index ${i + 1}`);
    }
  });

});