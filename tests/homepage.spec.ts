import {test,expect} from "@playwright/test"

test("verify home page", async ({page})=>
{
    await page.goto("https://example.com");
    await expect(page).toHaveTitle('Example Domain');
});