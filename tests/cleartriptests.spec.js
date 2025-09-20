const { test, expect } = require('@playwright/test');
const { stringify } = require('querystring');

test('Login ClearTrip', async ({ page }) => {
  await page.goto("https://www.cleartrip.com/");
  page.w
  console.log(await page.title());
  await page.waitForSelector(".c-pointer.c-neutral-900[data-testid='closeIcon']");
  await page.locator(".c-pointer.c-neutral-900[data-testid='closeIcon']").click();

  await page.locator(".fw-500.fs-4.ml-2").click();

  await page.locator("//p[normalize-space()='Round trip']").click();
  await page.locator("input[placeholder='Where from?']").clear();
  await page.locator("input[placeholder='Where from?']").pressSequentially("DEL");
  await page.locator(".airport-code:has-text('DEL')").click();



  await page.locator("input[placeholder='Where to?']").clear();
  await page.locator("input[placeholder='Where to?']").pressSequentially("BOM");
  await page.locator(".airport-code:has-text('BOM')").click();
  await page.locator("div[data-testid='dateSelectOnward']").click();
  //await page.pause();
  const startDate = generateFutureDate(3);
  console.log("target date is::", startDate);
  const startDateLocator = page.locator(`div[aria-label='${startDate}']`);
  await startDateLocator.click();
  await page.locator("div[data-testid='dateSelectOnward']").click();
  // await page.pause();
  await page.locator("div[data-testid='dateSelectReturn']").click();
  const endDate = generateFutureDate(8);
  console.log("target date is::", endDate)
  const endDateLocator = page.locator(`div[aria-label='${endDate}']`);
  await endDateLocator.click();
  await page.locator("//h4[normalize-space()='Search flights']").click();
  await page.title();
  await page.waitForTimeout(7000);
})




function generateFutureDate(days) {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today.toDateString();   // Format: "Fri Sep 19 2025"
}


