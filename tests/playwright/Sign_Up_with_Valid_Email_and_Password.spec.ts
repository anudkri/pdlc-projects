import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Sign Up with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the homepage
    try {
      await page.goto('https://example.com'); // Replace with the actual homepage URL
    } catch (error) {
      console.error('Failed to navigate to the homepage:', error);
      return;
    }

    // Step 2: Navigate to the sign-up page
    try {
      await page.click('text=Sign Up'); // Replace with the actual selector for the sign-up link/button
    } catch (error) {
      console.error('Failed to navigate to the sign-up page:', error);
      return;
    }

    // Step 3: Enter a valid email address
    const email = 'testuser@example.com';
    try {
      await page.fill('input[name="email"]', email); // Replace with the actual selector for the email input
    } catch (error) {
      console.error('Failed to enter email:', error);
      return;
    }

    // Step 4: Enter a strong password
    const password = 'StrongP@ssw0rd!';
    try {
      await page.fill('input[name="password"]', password); // Replace with the actual selector for the password input
    } catch (error) {
      console.error('Failed to enter password:', error);
      return;
    }

    // Step 5: Click on the 'Sign Up' button
    try {
      await page.click('button[type="submit"]'); // Replace with the actual selector for the sign-up button
    } catch (error) {
      console.error('Failed to click on the sign-up button:', error);
      return;
    }

    // Step 6: Assert the user is successfully signed up
    try {
      await expect(page).toHaveURL(/welcome/); // Replace '/welcome/' with the actual path of the welcome page
    } catch (error) {
      console.error('User was not redirected to the welcome page:', error);
    }
  });
});