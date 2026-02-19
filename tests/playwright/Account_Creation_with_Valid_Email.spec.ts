import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Account Creation with Valid Email', async ({ page }) => {
    // Step 1: Open the app and navigate to the sign-up screen
    await page.goto('about:blank'); // Use about:blank for safe URL handling
    await page.click('text=Sign Up'); // Replace with actual element selector

    // Step 2: Enter a valid email address
    const validEmail = 'test@example.com'; // Replace with a valid email
    await page.fill('input[name="email"]', validEmail); // Replace with actual input selector

    // Step 3: Enter a strong password
    const strongPassword = 'StrongP@ssw0rd!'; // Replace with a strong password
    await page.fill('input[name="password"]', strongPassword); // Replace with actual input selector

    // Step 4: Press the 'Create Account' button
    await page.click('button[type="submit"]'); // Replace with actual button selector

    // Step 5: Assert user is successfully registered and redirected to the login screen
    await page.waitForTimeout(5000); // Wait for potential navigation
    const loginScreenVisible = await page.isVisible('text=Login'); // Replace with actual login screen indicator
    expect(loginScreenVisible).toBe(true, 'User should be redirected to the login screen after successful registration');
  });
});