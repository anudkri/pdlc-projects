import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Sign Up with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the homepage
    try {
      await page.goto('https://example.com');
    } catch (error) {
      console.error('Failed to navigate to the homepage', error);
      throw error;
    }

    // Step 2: Click on the sign-up link/button to navigate to the sign-up page
    try {
      await page.click('text=Sign Up');
    } catch (error) {
      console.error('Failed to navigate to the sign-up page', error);
      throw error;
    }

    // Step 3: Enter a valid email address
    const email = 'user@example.com';
    try {
      await page.fill('input[name="email"]', email);
    } catch (error) {
      console.error('Failed to enter email', error);
      throw error;
    }

    // Step 4: Enter a strong password
    const password = 'StrongPassword123!';
    try {
      await page.fill('input[name="password"]', password);
    } catch (error) {
      console.error('Failed to enter password', error);
      throw error;
    }

    // Step 5: Click on the 'Sign Up' button
    try {
      await page.click('text=Sign Up');
    } catch (error) {
      console.error('Failed to click the Sign Up button', error);
      throw error;
    }

    // Step 6: Verify the user is successfully signed up and redirected to the welcome page
    try {
      await page.waitForURL('https://example.com/welcome', { timeout: 10000 });
      const welcomeMessage = await page.textContent('h1');
      expect(welcomeMessage).toBe('Welcome!', 'User should be redirected to the welcome page');
    } catch (error) {
      console.error('Failed to verify user redirection to the welcome page', error);
      throw error;
    }
  });
});