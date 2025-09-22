class CtlandingPage {
    constructor(page) {
        this.page = page;
        this.source="DEL";
        this.destination = "BOM"
        this.welcomePopupCloseButton= page.locator(".c-pointer.c-neutral-900[data-testid='closeIcon']");
        this.tripType= page.locator(".fw-500.fs-4.ml-2");
       this.selectTripOption= page.locator("//p[normalize-space()='Round trip']")
       this.sourceRegion=page.locator("input[placeholder='Where from?']");
       this.destinationRegion = page.locator("input[placeholder='Where to?']");
       this.dateOnwards= page.locator("div[data-testid='dateSelectOnward']");
       this.returnDate = page.locator("div[data-testid='dateSelectReturn']");
       this.searchFlightsButton = page.locator("//h4[normalize-space()='Search flights']");
    }


    async MakeRoundTripSearch() {
        await this.page.waitForSelector(".c-pointer.c-neutral-900[data-testid='closeIcon']");
        await this.welcomePopupCloseButton.click();
        await this.tripType.click();
        await this.selectTripOption.click();
        await this.sourceRegion.clear();
        await this.sourceRegion.pressSequentially(this.source);
        await this.page.locator(`.airport-code:has-text('${this.source}')`).click();
        await this.destinationRegion.clear();
        await this.destinationRegion.pressSequentially(this.destination);
        await this.page.locator(`.airport-code:has-text('${this.destination}')`).click();
        await this.dateOnwards.click();
        //await this.page.pause();
        const startDate = this.generateFutureDate(3);
        console.log("target date is::", startDate);
        const startDateLocator = this.page.locator(`div[aria-label='${startDate}']`);
        await startDateLocator.click();
        await this.dateOnwards.click();
        // await this.page.pause();
        await this.returnDate.click();
        const endDate = this.generateFutureDate(8);
        console.log("target date is::", endDate)
        const endDateLocator = this.page.locator(`div[aria-label='${endDate}']`);
        await endDateLocator.click();
        await this.searchFlightsButton.click();
        await this.page.title();
        await this.page.waitForTimeout(15000);
    }


    generateFutureDate(days) {
        const today = new Date();
        today.setDate(today.getDate() + days);
        return today.toDateString();   // Format: "Fri Sep 19 2025"
    }
}

module.exports = { CtlandingPage }