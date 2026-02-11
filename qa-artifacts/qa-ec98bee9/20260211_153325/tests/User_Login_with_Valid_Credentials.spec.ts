import { test, expect } from '@playwright/test';

test.describe('User Authentication', () => {
  test('User Login with Valid Credentials', async ({ page }) => {
    // Given: User is on the login page
    await page.goto('https://example.com/login');
    expect(page.url()).toBe('https://example.com/login');

    // Given: User has valid credentials
    const validUsername = 'testuser';
    const validPassword = 'securepassword123';

    // When: User enters valid username and password
    await page.fill('input[name="username"]', validUsername);
    await page.fill('input[name="password"]', validPassword);

    // When: User clicks on the 'Login' button
    await page.click('button[type="submit"]');

    // Then: User is successfully logged in
    await page.waitForNavigation({ url: 'https://example.com/dashboard' });
    expect(page.url()).toBe('https://example.com/dashboard');

    // Then: User is redirected to the dashboard
    const dashboardHeader = await page.locator('header h1');
    await expect(dashboardHeader).toHaveText('Dashboard', { timeout: 5000 });

    console.log('User successfully logged in and redirected to the dashboard.');
  });
});