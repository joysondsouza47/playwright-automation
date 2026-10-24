import{test,expect} from "@playwright/test"




test("wait for events", async ({page,context})=>
{

    // const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

    const page1expectedtitle = "SDET-QA Blog";


    // const page1 = await Promise.all([context.waitForEvent('page'),page.getByRole('button',{name:"New Tab"}).click()]);


    const page1 = context.waitForEvent('page');

    await page.getByRole('button',{name:"New Tab"}).click();

    const page1new = await page1;
    const page1title = await page1new.title();
    expect(page1title).toBe(page1expectedtitle);


})


test("wait for events 1", async ({page,context})=>
{

    // const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

    const page1expectedtitle = "Selenium";
    const page2expectedtitle = "Fast and reliable end-to-end testing for modern web apps | Playwright";

    // const page1 = await Promise.all([context.waitForEvent('page'),page.getByRole('button',{name:"New Tab"}).click()]);


    const page1 = page.waitForEvent('popup');

    await page.getByRole('button',{name:"Popup Windows"}).click();

    const page1new = await page1;
    const page1title = await page1new.title();
    expect(page1title).toBe(page1expectedtitle);

    const page2 = page.waitForEvent('popup');

    await page.getByRole('button',{name:"Popup Windows"}).click();

    const page2new = await page2;
    const page2title = await page2new.title();
    expect(page2title).toBe(page2expectedtitle);


})
//