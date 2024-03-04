import { test, Locator, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';   

// Navigate to the roulette page and wait for the site to completely load before proceeding with the test
test.beforeEach(async ({ page }, testInfo) => {
 await page.goto('https://csgoempire.com/roulette');
 await page.waitForLoadState();
});

test.describe('Testing the CSGO Empire Roulette Home Page', () => {
      
    test('Check if home page elements are displayed', async ({ page }) => {
      // First we initialise the HomePage object which contains the locators for all of the elements
      const homePage = new HomePage(page);

      await test.step('Check if elements are visble', async () => {

        // We use the Try/Catch method here. The following lines assert that each element is visible on the page
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
          // If any of the above assertions fail, catch the error
          throw new Error(`Not all elements are visible or an error occurred in visibility check. The error message is: ${e}`);
        }
      });
      
    });

    // The idea of this test is to check that entering and clearing a bet works
    test('Check entering bet works', async ({ page }) => {
      const homePage = new HomePage(page);

      await test.step('Enter a bet, increase it by 100 and clear it ', async () => {
        await homePage.enterBet(500);
        await homePage.bet100.click();
        await homePage.clearBet()
      });
     
    });

    // A test to check if clicking on the Sign In button navigates to the Steam login page
    test('Clicking on Sign In navigates to Steam', async ({ page }) => {
      const homePage = new HomePage(page);

      await test.step('Click on the Sign in button ', async () => {
        await homePage.signInButton.click()
      });
      
      // Here we validate the URL using regex type of validation.
      await test.step('Steam login page is displayed', async () => {
        await expect(page).toHaveURL(/https:\/\/steamcommunity\.com\/openid\/loginform\/\?.*/);
      });
      
    });
  });