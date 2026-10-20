import { test, expect, chromium } from '@playwright/test';

test('Browser Context Page Test', async () => {

    const browser = await chromium.launch({  // browser launch
        headless: false
    });

    try {
        const context1 = await browser.newContext();
 
        const page1 = await context1.newPage();

        const url = 'https://www.google.com/';

        await page1.goto(url);

        const actualURL = page1.url();

        console.log(actualURL);

        await expect(page1).toHaveURL(url);

    } finally {
        await browser.close();
    }

});