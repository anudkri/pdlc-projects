import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Validate Successful User Signup with Valid Email and Strong Password', async ({ page }) => {
    // Step 1: Navigate to the signup page
    try {
      await page.goto('https://example.com/signup', { waitUntil: 'networkidle' });
    } catch (error) {
      console.error('Failed to navigate to signup page:', error);
    }

    // Step 2: Enter a valid email address
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('testuser@example.com');

    // Step 3: Enter a strong password
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('Str0ngP@ssw0rd!');

    // Step 4: Click the 'Sign Up' button
    const signUpButton = page.locator('button[type="submit"]');
    await signUpButton.click();

    // Step 5: Assert that the user is successfully registered
    const successMessage = page.locator('.success-message');
    await expect(successMessage).toBeVisible({ timeout: 10000 }, 'Success message should be visible after signup.');

    // Step 6: Assert that a confirmation email is dispatched
    // Note: In a real test, this would involve checking an email API or a mock email service.
    const emailDispatchedMessage = page.locator('.email-dispatched-message');
    await expect(emailDispatchedMessage).toContainText('A confirmation email has been sent to your email address.', { timeout: 10000 }, 'Confirmation email dispatch message should be visible.');
  });
});