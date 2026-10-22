import{test,expect} from "@playwright/test"


test("Input box", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

    let name = "joyson dsouza"
    let email = "joysondsouza@gmail.com";
    let phonenumber = "9945636877";
    let address = "Bluebell corner neart st marys school chikmagalore"

    const namelocator = page.getByPlaceholder('Enter Name');
    const emaillocator = page.getByPlaceholder('Enter EMail');
    const phonenumberlocator = page.getByPlaceholder('Enter Phone');
    const addresslocator = page.locator("textarea#textarea");

    await namelocator.fill(name);
    await emaillocator.fill(email);
    await phonenumberlocator.fill(phonenumber)
    await addresslocator.fill(address)

    await expect(namelocator).toHaveValue(name)
    await expect(emaillocator).toHaveValue(email);
    await expect(phonenumberlocator).toHaveValue(phonenumber);
    await expect(addresslocator).toHaveValue(address);

    await page.close();

})

test("Checkbox", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const checkboxes = days.map(day=>page.getByLabel(day));

    //select all days
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked()
    }

    //uncheck all days
    for(const checkbox of checkboxes)
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    //Select Monday, Wednesday, and Friday using check().
    for(const checkbox of checkboxes)
    {
        if(await checkbox.inputValue()==="monday")
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked()
        }
        else if(await checkbox.inputValue()==="wednesday")
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked()
        }
         else if(await checkbox.inputValue()==="friday")
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked()
        }

    }
    await page.close();

})

test("radio", async ({page})=>
{
     await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");
     const maleradiolocator = page.locator("#male");
     const femaleradioloactor = page.locator("#female");

     await maleradiolocator.check()
     await expect(maleradiolocator).toBeChecked();
     await expect(femaleradioloactor).not.toBeChecked();

     await femaleradioloactor.check();
     await expect(femaleradioloactor).toBeChecked();
     await expect(maleradiolocator).not.toBeChecked();

     await page.close();

})