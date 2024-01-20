import { expect, Locator, Page } from '@playwright/test';

export class WithdrawPage {

readonly page: Page;
readonly csgo: Locator;
readonly bitcoin: Locator;
readonly bitcoinCash: Locator;
readonly etherium: Locator;
readonly litecoin: Locator;
readonly usdc: Locator;
readonly usdt: Locator;

///-------------------------------------------------- SELECTORS -------------------------------------------------- ///
/* This is a list of selectors found on the home page*/

constructor(page: Page) {
    this.page = page;
    this.csgo = page.locator('[data-key="cs:go"]');
    this.bitcoin = page.locator('[data-key="btc"]');
    this.bitcoinCash = page.locator('[data-key="bch"]');
    this.etherium = page.locator('[data-key="eth"]');
    this.litecoin = page.locator('[data-key="ltc"]');
    this.usdc = page.locator('[data-key="usdc"]');
    this.usdt = page.locator('[data-key="usdt"]');
  }

 
}