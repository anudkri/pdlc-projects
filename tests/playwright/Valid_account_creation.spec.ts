import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Valid account creation', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('about:blank'); // Replace with actual sign-up URL when known
    } catch (error) {
      console.error('Navigation failed:', error);
      return;
    }

    // Step 2: Enter a valid email address
    const validEmail = 'testuser@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a strong password
    const strongPassword = 'StrongPassword123!';
    await page.fill('input[name="password"]', strongPassword);

    // Step 4: Click the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Verify that the user account is created successfully
    const successMessage = await page.waitForSelector('.success-message', { timeout: 10000 });
    expect(await successMessage.textContent()).toContain('Account created successfully', 'Expected success message is not displayed.');
  });
});