import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Valid Email and Password Sign-Up', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { waitUntil: 'networkidle' });
    } catch (error) {
      console.error('Navigation to sign-up page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address
    const emailInputSelector = '#email';
    const validEmail = 'testuser@example.com';
    await page.fill(emailInputSelector, validEmail);

    // Step 3: Enter a valid password
    const passwordInputSelector = '#password';
    const validPassword = 'ValidPass123!';
    await page.fill(passwordInputSelector, validPassword);

    // Step 4: Submit the sign-up form
    const submitButtonSelector = '#signup-submit';
    await page.click(submitButtonSelector);

    // Step 5: Assert user registration success
    const successMessageSelector = '#success-message';
    await page.waitForSelector(successMessageSelector, { timeout: 10000 });
    const successMessage = await page.textContent(successMessageSelector);
    expect(successMessage).toContain('Registration successful', 'Expected success message is missing');

    // Step 6: Assert confirmation email is sent
    // Note: Assuming there is a UI element or API response indicating email sent
    const emailSentSelector = '#email-confirmation';
    await page.waitForSelector(emailSentSelector, { timeout: 10000 });
    const emailSentText = await page.textContent(emailSentSelector);
    expect(emailSentText).toContain('Confirmation email sent', 'Email confirmation message is missing');
  });
});