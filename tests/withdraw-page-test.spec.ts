import { test, Locator, Page, expect } from '@playwright/test';
import { WithdrawPage } from '../pages/withdraw';   

// Even though the task for this project was to test only the home page, I have taken the liberty to show the POM approach I have used.
test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://csgoempire.com/withdraw');
    await page.waitForLoadState();
});

test.describe('Testing the Home Page', () => {
      
    test('Check if withdraw page elements are displayed', async ({ page }) => {
      const withdrawPage = new WithdrawPage(page);

      await test.step('Check if elements are visble', async () => {
        try {
          await expect(withdrawPage.csgo).toBeVisible();
          await expect(withdrawPage.bitcoin).toBeVisible();
          await expect(withdrawPage.bitcoinCash).toBeVisible();
          await expect(withdrawPage.etherium).toBeVisible();
          await expect(withdrawPage.litecoin).toBeVisible();
          await expect(withdrawPage.usdc).toBeVisible();
          await expect(withdrawPage.usdt).toBeVisible();
        }
        catch (e){
          throw new Error(`Not all elements are visible or an error occurred in visibility check. The error message is: ${e}`);
        }
      });
      
    });
});
