import { test, expect } from '@playwright/test';

test.describe('Notes Sorting', () => {
  test('should sort notes by date created in ascending order', async ({ page }) => {
    // Given: User is logged into the notes application
    await page.goto('https://example.com/login');
    await page.fill('input[name="username"]', 'user@example.com');
    await page.fill('input[name="password"]', 'securepassword');
    await page.click('button[type="submit"]');

    // Ensure login was successful
    await expect(page).toHaveURL('https://example.com/notes');
    console.log('User successfully logged in and navigated to notes page.');

    // Given: There are multiple notes with different creation dates
    // This would typically be set up in a test database or a test fixture

    // When: Navigate to the notes list view
    await page.goto('https://example.com/notes/list');

    // Wait for the notes list to be visible
    await page.waitForSelector('.notes-list');
    console.log('Notes list view is visible.');

    // When: Activate the sort option and select 'Sort by date created ascending'
    await page.click('.sort-options-button');
    await page.click('text=Sort by date created ascending');

    // Then: Notes are displayed in ascending order by date created
    const noteDates = await page.evaluate(() => {
      const dateElements = Array.from(document.querySelectorAll('.note-date'));
      return dateElements.map(el => new Date(el.textContent ?? '').getTime());
    });

    // Check if the dates are in ascending order
    for (let i = 0; i < noteDates.length - 1; i++) {
      expect(noteDates[i], `Note at index ${i} is not in ascending order`).toBeLessThanOrEqual(noteDates[i + 1]);
    }
    console.log('Notes are successfully sorted in ascending order by creation date.');
  });
});