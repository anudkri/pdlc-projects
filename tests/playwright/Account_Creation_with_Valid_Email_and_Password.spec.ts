import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with the actual URL when available
    } catch (error) {
      console.error('Navigation failed:', error);
    }

    // Step 2: Enter a valid email address
    const validEmail = 'testuser@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a secure password
    const securePassword = 'SecurePassword123!';
    await page.fill('input[name="password"]', securePassword);

    // Step 4: Click on the 'Create Account' button
    await page.click('button#create-account');

    // Step 5: Assert that the user is redirected to the login page
    await page.waitForNavigation({ timeout: 10000 });
    expect(page.url()).toContain('/login', 'User should be redirected to the login page after account creation');
  });
});