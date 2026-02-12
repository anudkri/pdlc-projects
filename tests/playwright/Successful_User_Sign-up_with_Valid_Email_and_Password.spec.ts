import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Successful User Sign-up with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/sign-up', { timeout: 10000 });
    } catch (error) {
      console.error('Failed to navigate to the sign-up page:', error);
      throw error;
    }

    // Step 2: Enter a valid email address
    const email = 'testuser@example.com';
    await page.fill('input[name="email"]', email);

    // Step 3: Enter a strong password
    const password = 'Str0ngP@ssw0rd!';
    await page.fill('input[name="password"]', password);

    // Step 4: Click the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Assert that the user account is created successfully
    await page.waitForNavigation({ timeout: 10000 });
    const url = page.url();
    expect(url).toBe('https://example.com/confirmation', 'User should be redirected to the confirmation page');

    // Step 6: Additional assertion to ensure user is on the confirmation page
    const confirmationMessage = await page.textContent('h1');
    expect(confirmationMessage).toContain('Account Created', 'Confirmation page should display account creation message');
  });
});