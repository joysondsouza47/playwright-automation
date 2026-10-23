import{test,expect} from "@playwright/test"


test("listeners", async ({page})=>
{
        await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

        const alert = page.getByRole('button',{name: "Simple Alert"});
        const confirmation = page.getByRole('button',{name:"Confirmation Alert"});
        const prompt = page.getByRole('button',{name:"Prompt Alert"});
        let name = "joyson";
        page.on("dialog",async (dialog)=>
        {
                console.log(dialog.message());
                console.log(dialog.type());
                
                if(dialog.type()==="confirm")
                {
                    await dialog.dismiss()
                }
                else if(dialog.type()==="prompt")
                {
                    await dialog.accept(name)
                }
                else
                {
                    await dialog.accept();
                }
                
        })

        await alert.click()
        await confirmation.click()
        await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")
        await prompt.click();
        await expect(page.locator("#demo")).toHaveText(`Hello ${name}! How are you today?`)

})