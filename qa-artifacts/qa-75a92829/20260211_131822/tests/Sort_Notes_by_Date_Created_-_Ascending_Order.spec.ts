import { test, expect } from '@playwright/test';

test.describe('Notes Sorting', () => {
  test('Sort Notes by Date Created - Ascending Order', async ({ page }) => {
    // Step 1: Log the user into the application
    await userLogin(page);

    // Step 3: Navigate to the notes section of the application
    await page.goto('https://example.com/notes');
    await expect(page).toHaveURL(/.*\/notes/, { timeout: 5000 });

    // Step 4: Click on the 'Sort by Date Created' button or option
    const sortButton = page.locator('button#sort-by-date');
    await expect(sortButton).toBeVisible({ timeout: 5000 });
    await sortButton.click();

    // Step 5: Select 'Ascending Order' if applicable
    const ascendingOption = page.locator('button#sort-ascending');
    await expect(ascendingOption).toBeVisible({ timeout: 5000 });
    await ascendingOption.click();

    // Step 6: Verify that notes are displayed in ascending order
    const notes = await page.locator('.note-item').allTextContents();

    // Convert note creation dates to Date objects for comparison
    const noteDates = notes.map(note => new Date(note));

    // Check that each date is less than or equal to the next to confirm ascending order
    for (let i = 0; i < noteDates.length - 1; i++) {
      const [current, next] = [noteDates[i], noteDates[i + 1]];
      expect(current <= next).toBeTruthy();
    }
  });
});

// Mock login function for demonstration purposes
async function userLogin(page: any) {
  await page.goto('https://example.com/login');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
}