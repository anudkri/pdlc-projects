import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Valid Account Creation', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('https://example.com/account-creation');
    } catch (error) {
      console.error('Navigation to account creation page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address
    const emailInputSelector = '#email';
    const testEmail = 'valid.email@example.com';
    await page.fill(emailInputSelector, testEmail);

    // Step 3: Enter a strong password
    const passwordInputSelector = '#password';
    const strongPassword = 'StrongPassword123!';
    await page.fill(passwordInputSelector, strongPassword);

    // Step 4: Submit the account creation form
    const submitButtonSelector = '#submit';
    await page.click(submitButtonSelector);

    // Step 5: Verify that a confirmation message is displayed
    const confirmationMessageSelector = '#confirmation-message';
    await page.waitForSelector(confirmationMessageSelector, { timeout: 5000 });
    const confirmationMessage = await page.textContent(confirmationMessageSelector);
    expect(confirmationMessage).toContain('successfully created', 'Account creation confirmation message should be displayed');
  });
});