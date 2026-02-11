import { test, expect } from '@playwright/test';

test.describe('Notes Sorting', () => {
  test('Verify sorting in ascending order', async ({ page }) => {
    // Given: Multiple notes with varying creation dates are present
    await page.goto('https://your-notes-app-url.com');
    await page.waitForSelector('.note-item'); // Wait for notes to be visible

    // When: Locate the sorting dropdown or button, Select the option to sort notes by date created in ascending order
    const sortDropdown = await page.waitForSelector('#sort-dropdown');
    await sortDropdown.click();
    const sortOption = await page.waitForSelector('text=Date Created Ascending');
    await sortOption.click();

    // Then: Notes are displayed in ascending order of their creation dates
    const notes = await page.$$eval('.note-item', notes => 
      notes.map(note => ({
        title: note.querySelector('.note-title')?.textContent || '',
        date: new Date(note.querySelector('.note-date')?.textContent || '')
      }))
    );

    const isSortedAscending = notes.every((note, index, array) => {
      return index === 0 || note.date >= array[index - 1].date;
    });

    expect(isSortedAscending).toBe(true, 'Notes should be sorted in ascending order by creation date');
  });
});