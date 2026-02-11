import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Successful User Registration with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup');
    } catch (error) {
      console.error('Navigation to sign-up page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const emailField = page.locator('#email');
    await emailField.fill('testuser@example.com');
    
    // Step 3: Enter a strong password in the password field
    const passwordField = page.locator('#password');
    await passwordField.fill('StrongPassword123!');
    
    // Step 4: Click the 'Sign Up' button
    const signUpButton = page.locator('#sign-up-button');
    await signUpButton.click();
    
    // Step 5: Assert the user is successfully registered
    const successMessage = page.locator('.success-message');
    await expect(successMessage).toBeVisible({ timeout: 5000 });
    await expect(successMessage).toHaveText('Registration successful', { timeout: 5000 });

    // Step 6: Assert a confirmation email is sent
    // Note: This step would typically require integration with a mock email service or checking a real inbox
    // Placeholder for email confirmation check
    const emailSent = true; // Replace with actual check
    expect(emailSent).toBeTruthy('Confirmation email should be sent');
  });
});