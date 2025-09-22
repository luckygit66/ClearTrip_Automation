class CtlandingPage {
    constructor(page) {
        this.page = page;
    }


    async MakeRoundTripSearch() {
        await this.page.waitForSelector(".c-pointer.c-neutral-900[data-testid='closeIcon']");
        await this.page.locator(".c-pointer.c-neutral-900[data-testid='closeIcon']").click();
        await this.page.locator(".fw-500.fs-4.ml-2").click();
        await this.page.locator("//p[normalize-space()='Round trip']").click();
        await this.page.locator("input[placeholder='Where from?']").clear();
        await this.page.locator("input[placeholder='Where from?']").pressSequentially("DEL");
        await this.page.locator(".airport-code:has-text('DEL')").click();
        await this.page.locator("input[placeholder='Where to?']").clear();
        await this.page.locator("input[placeholder='Where to?']").pressSequentially("BOM");
        await this.page.locator(".airport-code:has-text('BOM')").click();
        await this.page.locator("div[data-testid='dateSelectOnward']").click();
        //await this.page.pause();
        const startDate = this.generateFutureDate(3);
        console.log("target date is::", startDate);
        const startDateLocator = this.page.locator(`div[aria-label='${startDate}']`);
        await startDateLocator.click();
        await this.page.locator("div[data-testid='dateSelectOnward']").click();
        // await this.page.pause();
        await this.page.locator("div[data-testid='dateSelectReturn']").click();
        const endDate = this.generateFutureDate(8);
        console.log("target date is::", endDate)
        const endDateLocator = this.page.locator(`div[aria-label='${endDate}']`);
        await endDateLocator.click();
        await this.page.locator("//h4[normalize-space()='Search flights']").click();
        await this.page.title();
        await this.page.waitForTimeout(7000);
    }


    generateFutureDate(days) {
        const today = new Date();
        today.setDate(today.getDate() + days);
        return today.toDateString();   // Format: "Fri Sep 19 2025"
    }
}

module.exports = { CtlandingPage }