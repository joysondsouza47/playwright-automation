import{test,expect} from "@playwright/test"

test("static table", async({page})=>
{
    
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");
    const table = page.locator("table[name='BookTable']");
    //Counts all table rows.
    const row = table.locator("tbody tr");
    const rowcount = await row.count();
    console.log("Number of rows in this table is : ",rowcount)

    //Counts the columns in the header.
    const headercolumn = row.locator("th");
    const columncount = await headercolumn.count();
    console.log("Number of columns in a row is : ",columncount)
    
    await page.waitForTimeout(2000);

    //Prints the text of the first data row.
    const firstrowtext = await row.nth(1).locator('td').allInnerTexts();
    console.log(firstrowtext);

    //Prints all book names from the first column.
    const bodyfirstcolumn = await row.locator("td:nth-child(1)").allInnerTexts();
    console.log(bodyfirstcolumn);

    //Validates that the table has at least one data row.
    const dataRows = table.locator("tr:has(td)");

    await expect(dataRows.first()).toBeVisible();
    

})