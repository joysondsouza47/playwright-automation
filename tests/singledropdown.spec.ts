import{test,expect}  from "@playwright/test"



test("singledropdown", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

    const dropdownlocator = page.locator("#country");

    //Select India using label.
    await dropdownlocator.selectOption({label:'India'});
    //Validate India using toHaveValue().
    await expect(dropdownlocator).toHaveValue("india")
    //Select Germany using value.
    await dropdownlocator.selectOption('germany');
    //Validate Germany.
    await expect(dropdownlocator).toHaveValue("germany")
    //Select an option using index.
    await dropdownlocator.selectOption({index:5});
    //Validate the final selected option.
    await expect(dropdownlocator).toHaveValue("australia")
})