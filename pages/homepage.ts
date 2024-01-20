import { expect, Locator, Page } from '@playwright/test';
import { error } from 'console';


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
readonly headerFreecase: Locator;
readonly headerFairness: Locator;
readonly headerBonusCases: Locator;
readonly headerReferrals: Locator;
readonly headerAbout: Locator;
readonly headerDailyCoins: Locator;
readonly popupSignIn: Locator;
readonly popupClose: Locator;


///-------------------------------------------------- SELECTORS -------------------------------------------------- ///
/* This is a list of selectors found on the home page*/

constructor(page: Page) {
    this.page = page;
    this.logo = page.locator(`div.logo.flex.items-center.justify-center`);
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
    this.withdrawButton = page.getByRole('button', { name: 'Withdraw' }).first();
    this.depositButton = page.getByRole('button', { name: 'Deposit' }).first();
    this.signInButton = page.locator(`//*[@id="empire-header"]/div[1]/div/div[3]/div[2]/div[3]/button`)
    this.empireFooter = page.locator(`//*[@id="empire-footer"]/div/div`);
    this.supportBtn = page.locator(`//*[@id="app"]/button/div`);
    this.bet100 = page.getByRole('button', { name: '+ 100' });
    this.clearBtn = page.getByRole('button', { name: 'Clear' });
    this.headerFreecase = page.locator('a[href="#free-case"]').first();
    this.headerFairness = page.locator('a[href="/fairness"]').first();
    this.headerBonusCases = page.locator('a[href="/profile/cases"]').first();
    this.headerReferrals = page.locator('a[href="/referrals"]').first();
    this.headerAbout = page.locator('a[href="/faq"]').first();
    this.headerDailyCoins = page.locator('a[href="#daily-coins"]').first();
    this.popupSignIn = page.locator('//*[@id="app"]/div[9]/div/div[2]/div/div');
    this.popupClose= page.locator(`//body/div[@id='app']/div[@id='app']/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/div[2]`);

  }

  async enterBet(bet: number) {
    await this.page.waitForLoadState();
    await this.betInputField.fill(bet.toString());
  }

    async clearBet(){
    await this.clearBtn.click();
  }
}