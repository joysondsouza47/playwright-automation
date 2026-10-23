import{test,expect}   from "@playwright/test"



test.skip("basic frame", async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/iframe?utm_source=chatgpt.com");

    let text = "Playwright Automation Testing";

    const frame = page.frameLocator("#mce_0_ifr");
    const inputtext = frame.locator("#tinymce");

    await inputtext.clear();
    await inputtext.fill(text);

    const inputvalue = inputtext.locator("p");
    await expect(inputvalue).toHaveText(text);

})


test.skip("Multiple frames", async ({ page }) => {

    await page.goto("https://demoqa.com/frames");
    const text = "This is a sample page";

    // 1. Locate frame1
    const frame1 = page.frame("frame1");

    // 2. Retrieve text inside frame1
    if(frame1)
    {
        const frame1text = await frame1.locator("#sampleHeading").innerText();
        console.log(frame1text);
        expect(frame1text).toBe(text);
    }
    // 3. Locate frame2

    const frame2 = page.frame("frame2");

    // 4. Retrieve text inside frame2

    // 5. Validate both frame texts
    if(frame2)
    {
        const frame2text = await frame2.locator("#sampleHeading").innerText();
        console.log(frame2text);
        expect(frame2text).toBe(text);
    }

    

});


test("nested frames",async ({page})=>
{

    await page.goto("https://demoqa.com/nestedframes");
    const expectedparenttext = "Parent frame";
    const expectedchildtext = "Child Iframe";

    const frames = page.frames();
    console.log(frames.length);
    console.log(frames);

    //Locates the parent iframe.
    const parentchild = page.frameLocator('#frame1');
    //Prints the text Parent frame.
    console.log(await parentchild.locator('body').innerText());
    await expect(parentchild.locator('body')).toContainText(expectedparenttext);
    

    //Locates the child iframe inside the parent.
    const childframe = parentchild.frameLocator("iframe")
    //Prints the text Child Iframe.
    const childtext = await childframe.locator("body").innerText();
    console.log(childtext);
    expect(childtext).toBe(expectedchildtext);


})