import { expect, Locator, Page } from '@playwright/test';


export class HomePage {

readonly page: Page;
readonly logo: Locator;
readonly roulette: Locator;
readonly previousRolls: Locator;
readonly last100: Locator;
readonly betInputField: Locator;
readonly betButtons: Locator;
readonly betContainers: Locator;
readonly dailyRoutineRaceHeader: Locator;
readonly dailyRoutineRaceTable: Locator;
readonly chat: Locator;
readonly chatHeader: Locator;
readonly empireHeader: Locator;
readonly subMenu: Locator;
readonly withdrawButton: Locator;
readonly depositButton: Locator;
readonly signInButton: Locator;
readonly empireFooter: Locator;
readonly supportBtn: Locator;
readonly bet100: Locator;
readonly clearBtn: Locator;


///-------------------------------------------------- SELECTORS -------------------------------------------------- ///
/* This is a list of selectors found on the home page*/

constructor(page: Page) {
    this.page = page;
    this.logo = page.locator(`//*[@id="empire-header"]/div[1]/div/div[1]`);
    this.roulette = page.locator('//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[2]');
    this.previousRolls = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[3]/div/div[1]/div[1]`);
    this.last100 = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[3]/div/div[2]`);
    this.betInputField = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[4]/div/div[1]/input`);
    this.betButtons = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[4]/div/div[2]/div`);
    this.betContainers = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[6]`);
    this.dailyRoutineRaceHeader = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[8]/div[1]/div[1]`);
    this.dailyRoutineRaceTable = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[8]/div[2]/table`);
    this.chat = page.locator(`//*[@id="app"]/div[3]/div/div[2]`);
    this.chatHeader = page.locator(`//*[@id="popover-reference"]/button`)
    this.empireHeader = page.locator(`//*[@id="empire-header"]/div[1]/div/div[2]/div`)
    this.subMenu = page.locator(`//*[@id="empire-header"]/div[1]/div/div[3]/div[1]`);
    this.withdrawButton = page.locator(`//*[@id="empire-header"]/div[1]/div/div[3]/div[2]/div[1]/a/button/span`);
    this.depositButton = page.locator(`//*[@id="empire-header"]/div[1]/div/div[3]/div[2]/div[2]/a/button/span`);
    this.signInButton = page.locator(`//*[@id="empire-header"]/div[1]/div/div[3]/div[2]/div[3]/button/span/div[2]`);
    this.empireFooter = page.locator(`//*[@id="empire-footer"]/div/div`);
    this.supportBtn = page.locator(`//*[@id="app"]/button/div`);
    this.bet100 = page.locator(`//*[@id="app"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[4]/div/div[2]/div/button[6]`)
    this.clearBtn = page.getByRole('button', { name: 'Clear' });
  }

  async enterBet(bet: number) {
    await this.page.waitForLoadState();
    await this.betInputField.fill(bet.toString());
  }

  async clearBet(){
    await this.clearBtn.click();
  }
}