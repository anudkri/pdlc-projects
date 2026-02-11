import { test, expect } from '@playwright/test';

test.describe('Notes Sorting', () => {
  test('Verify ascending sort by date created', async ({ page }) => {
    // Given: Notes exist with various creation dates
    // Navigate to the application (replace with actual URL)
    await page.goto('https://example.com/notes');
    await page.waitForLoadState('networkidle');

    // When: Navigate to the notes section
    const notesSection = page.locator('#notes-section');
    await expect(notesSection).toBeVisible({ timeout: 5000 });

    // Click on the sort option
    const sortButton = page.locator('#sort-button');
    await sortButton.click();
    await expect(page.locator('#sort-menu')).toBeVisible();

    // Select 'Sort by Date Created - Ascending'
    const sortByDateAsc = page.locator('#sort-by-date-asc');
    await sortByDateAsc.click();

    // Then: Notes are displayed in ascending order by date created
    const notes = page.locator('.note');
    const dates = await notes.evaluateAll((noteElements) =>
      noteElements.map((note) => new Date(note.getAttribute('data-created-date')))
    );

    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i] <= dates[i + 1], `Note at index ${i} was not in ascending order`).toBe(true);
    }
  });
});