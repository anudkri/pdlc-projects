import { test, expect } from '@playwright/test';

test.describe('Feature: User Sign-Up', () => {
  test('Sign-up with valid email and strong password', async ({ page }) => {
    // Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Navigation to sign-up page failed', error);
    }

    // Enter a valid email address
    const emailInputSelector = 'input#email';
    await page.fill(emailInputSelector, 'user@example.com');
    expect(await page.inputValue(emailInputSelector)).toBe('user@example.com', 'Email should be correctly entered');

    // Enter a strong password
    const passwordInputSelector = 'input#password';
    await page.fill(passwordInputSelector, 'Str0ngP@ssw0rd!');
    expect(await page.inputValue(passwordInputSelector)).toBe('Str0ngP@ssw0rd!', 'Password should be correctly entered');

    // Click the sign-up button
    const signUpButtonSelector = 'button#sign-up';
    await page.click(signUpButtonSelector);

    // Assert successful registration
    const successMessageSelector = 'text=Registration successful';
    await expect(page.locator(successMessageSelector)).toBeVisible({ timeout: 10000 }, 'Success message should be visible');

    // Assert redirection to the home page
    await page.waitForURL('https://example.com/home', { timeout: 10000 });
    expect(page.url()).toBe('https://example.com/home', 'User should be redirected to the home page');
  });
});