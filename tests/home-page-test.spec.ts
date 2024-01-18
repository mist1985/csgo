import { test, Locator, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';   


test.describe('Testing the Home Page', () => {
      
    test('Check if home page elements are displayed', async ({ page }) => {
      const homePage = new HomePage(page);
  
      await test.step('Go to home page', async () => {
        await page.goto('https://csgoempire.com/roulette');
        await page.waitForLoadState();
      });
  
      await test.step('Check if elements are visble', async () => {
        await expect(homePage.roulette).toBeVisible();
        await expect(homePage.previousRolls).toBeVisible();
        await expect(homePage.last100).toBeVisible();
        await expect(homePage.betInputField).toBeVisible();
        await expect(homePage.betButtons).toBeVisible();
        await expect(homePage.betContainers).toBeVisible();
        await expect(homePage.dailyRoutineRaceHeader).toBeVisible();
        await expect(homePage.dailyRoutineRaceTable).toBeVisible();
      });

      await test.step('Enter a bet, increase it by 100 and clear it ', async () => {
        await homePage.enterBet(500);
        await homePage.bet100.click();
        await homePage.clearBet()
      });
     
    });
  });