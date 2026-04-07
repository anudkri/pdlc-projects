import { test, expect } from '@playwright/test';

test.describe('Feature: User Account Management', () => {
  test('Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with the actual URL if known
      // Here you would typically navigate to the account creation page
    } catch (error) {
      console.error('Navigation failed:', error);
      await page.close();
      return;
    }

    // Step 2: Enter a valid email address
    const validEmail = 'user@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a secure password
    const securePassword = 'SecurePassword123!';
    await page.fill('input[name="password"]', securePassword);

    // Step 4: Click on the 'Create Account' button
    await page.click('button[type="submit"]');

    // Step 5: Assert that the user is redirected to the login page
    await page.waitForURL('**/login', { timeout: 10000 }); // Replace with the actual login page URL pattern
    expect(page.url()).toContain('/login'); // Assert that the URL contains '/login'
    expect(await page.isVisible('text=Login')).toBeTruthy(); // Ensure login text is visible
  });
});