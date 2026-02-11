import { test, expect } from '@playwright/test';

test.describe('Feature: Notes Management', () => {
  test('Verify sorting functionality orders notes by creation date', async ({ page }) => {
    // Step 1: Navigate to the application with a safe URL handling
    const notesUrl = 'https://example.com/notes'; // Replace with actual URL
    try {
      await page.goto(notesUrl, { waitUntil: 'load', timeout: 10000 });
    } catch (error) {
      console.error('Failed to navigate to the notes section:', error);
      throw error;
    }

    // Step 2: Initiate sorting by creation date
    try {
      const sortButtonSelector = 'button#sort-by-date'; // Replace with actual selector
      await page.click(sortButtonSelector);
    } catch (error) {
      console.error('Failed to initiate sorting by creation date:', error);
      throw error;
    }

    // Step 3: Verify notes are displayed in order of their creation date
    try {
      const noteDatesSelector = '.note-date'; // Replace with actual selector
      const noteDates = await page.$$eval(noteDatesSelector, elements => 
        elements.map(el => new Date(el.textContent || '').getTime())
      );

      // Ensure that the dates are sorted from earliest to latest
      for (let i = 0; i < noteDates.length - 1; i++) {
        expect(noteDates[i]).toBeLessThanOrEqual(noteDates[i + 1], `Note at index ${i} is not in order`);
      }
    } catch (error) {
      console.error('Failed to verify notes order by creation date:', error);
      throw error;
    }
  });
});