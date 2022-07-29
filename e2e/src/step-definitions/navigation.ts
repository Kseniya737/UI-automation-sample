import { Given, When } from '@cucumber/cucumber'

Given(
    /^I am on the "([^"]*)" page$/,
    async function(pageId: string){
        console.log(`I am on the ${pageId} page`);
        await global.page.goto("https://petstore.octoperf.com/actions/Catalog.action")
    }
)

When(
    /^I click the logo$/,
    async function(){
        console.log("click the logo");
        await global.page.locator('#MainImageContent > img').click();
    }
)