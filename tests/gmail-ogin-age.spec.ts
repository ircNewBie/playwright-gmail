import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {
    await page.goto('https://mail.google.com');
});

test.describe("Test Signin page", () => {

    test('Sign in Text should be visible', async ({ page }) => {
        await expect(page.getByText('Sign in', { exact: true })).toBeVisible();
    });

    test("User can type Email or phone at the input box ", async ({ page }) => {
        await expect(page.getByLabel('Email or phone')).toBeVisible();
    });

    test("User can click 'Create account' button  ", async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Create account' })).toBeVisible();
        await page.getByRole('button', { name: 'Create account' }).click();

    });

}
);