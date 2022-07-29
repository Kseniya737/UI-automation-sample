import {Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'

Then(
    /^the logo is visible$/,
    async function () {
        console.log("the logo is visible");
        const logo = global.page.locator('#MainImageContent > img');
        await expect(logo).toBeVisible();
    }
);

Then(
    /^catalog with birds is displayed$/,
    async function () {
        console.log("Catalog with birds is displayed");
        const header = global.page.locator("#Catalog > h2");
        await expect(header).toBeVisible();
    }
);