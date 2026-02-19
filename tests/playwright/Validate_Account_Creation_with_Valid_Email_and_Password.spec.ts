import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Validate Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with the actual URL when known
    } catch (error) {
      console.error('Failed to navigate to the account creation page:', error);
    }

    // Step 2: Enter a valid email address
    const validEmail = 'test@example.com';
    await page.fill('input[name="email"]', validEmail); // Adjust selector as necessary

    // Step 3: Enter a valid password
    const validPassword = 'SecureP@ssw0rd';
    await page.fill('input[name="password"]', validPassword); // Adjust selector as necessary

    // Step 4: Click on the 'Sign Up' button
    await page.click('button#signUp'); // Adjust selector as necessary

    // Step 5: Assert that the user is redirected to the login page
    await page.waitForURL(/login/); // Adjust the URL pattern as necessary
    expect(page.url()).toMatch(/login/, 'User should be redirected to the login page after account creation');
  });
});