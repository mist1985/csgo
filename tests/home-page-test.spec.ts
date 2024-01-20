import { test, Locator, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';   

test.beforeEach(async ({ page }, testInfo) => {
 await page.goto('https://csgoempire.com/roulette');
 await page.waitForLoadState();
});

test.describe('Testing the Home Page', () => {
      
    test('Check if home page elements are displayed', async ({ page }) => {
      const homePage = new HomePage(page);

      await test.step('Check if elements are visble', async () => {
        try {
          await expect(homePage.logo).toBeVisible();
          await expect(homePage.roulette).toBeVisible();
          await expect(homePage.previousRolls).toBeVisible();
          await expect(homePage.last100).toBeVisible();
          await expect(homePage.betInputField).toBeVisible();
          await expect(homePage.betButtons).toBeVisible();
          await expect(homePage.betContainers).toBeVisible();
          await expect(homePage.dailyRoutineRaceHeader).toBeVisible();
          await expect(homePage.dailyRoutineRaceTable).toBeVisible();
          await expect(homePage.chat).toBeVisible();
          await expect(homePage.chatHeader).toBeVisible();
          await expect(homePage.empireHeader).toBeVisible();
          await expect(homePage.subMenu).toBeVisible();
          await expect(homePage.withdrawButton).toBeVisible();
          await expect(homePage.depositButton).toBeVisible();
          await expect(homePage.signInButton).toBeVisible();
          await expect(homePage.empireFooter).toBeVisible();
          await expect(homePage.supportBtn).toBeVisible();
          await expect(homePage.bet100).toBeVisible();
          await expect(homePage.clearBtn).toBeVisible();
          await expect(homePage.headerFreecase).toBeVisible();
          await expect(homePage.headerFairness).toBeVisible();
          await expect(homePage.headerBonusCases).toBeVisible();
          await expect(homePage.headerReferrals).toBeVisible();
          await expect(homePage.headerAbout).toBeVisible();
          await expect(homePage.headerDailyCoins).toBeVisible();
    
        }
        catch (e){
          throw new Error(`Not all elements are visible or an error occurred in visibility check. The error message is: ${e}`);
        }
      });
      
    });

    
    test('Check entering bet works', async ({ page }) => {
      const homePage = new HomePage(page);

      await test.step('Enter a bet, increase it by 100 and clear it ', async () => {
        await homePage.enterBet(500);
        await homePage.bet100.click();
        await homePage.clearBet()
      });
     
    });

    test('Clicking on Sign In navigates to Steam', async ({ page }) => {
      const homePage = new HomePage(page);

      await test.step('Click on the Sign in button ', async () => {
        await homePage.signInButton.click()
      });
      await test.step('Steam login page is displayed', async () => {
        await expect(page).toHaveURL(/https:\/\/steamcommunity\.com\/openid\/loginform\/\?.*/);
      });
      
    });
  });