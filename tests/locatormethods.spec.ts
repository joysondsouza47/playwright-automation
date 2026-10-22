import {test,expect} from "@playwright/test"


test("locator  1", async ({page})=>
{
      await page.getByRole('button').filter({hasText: 'name'})
      await page.getByRole('button').first()
      await page.getByRole('button').last()
      await page.getByRole('button').nth(0)
      await page.getByRole('button').and(page.locator("#value"))
      await page.getByRole('button').or(page.locator("//input[@id='name']"))
      const arrayloactor= await page.getByRole('button').all();
})



//getByRole('role'{name: "value"})
//getByText("text value",{exact:true}) 
//getByText(/text value/i)^ $
//getByAltText('alt value)
//getByPlaceholder('placeholder value')+
//getByLabel('label value')
//getByTitle('title value')
//getByTestId('id value')

//locator("tag#value")
//locator("tag.value")
//locator("tag[attribute='value']")
//locator("tag>input[attribute='value']")

//tag[@attribute='value']
//tag[contains(@attribute, 'value')]
//tag[text()='value']


//methods to narrow down locators
//.filter({hasText: "value"});
//.first()
//.last()
//.nth(0)
//.count() gives matching elements
//.all() returns an array of locators for current match
//.isvisible
//.isEnabled
//.getAttribute


//.fill()
//.click()
//.dblclick
//.check()
//.uncheck()
//.press()
//.selectOption()
//.hover
//.focus
//.clear()
//.setInputFiles
//.screenshot()
//.scrollIntoViewIfNeeded

