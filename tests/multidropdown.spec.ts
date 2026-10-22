import{test,expect} from "@playwright/test"


test.skip("multi dropdown", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com")

    const multidropdownlocator = page.locator("#colors");

    //Selects Red and Blue using values.
    await multidropdownlocator.selectOption(['red','blue']);
    //Validates both selections with toHaveValues().
    await expect(multidropdownlocator).toHaveValues(['red','blue']);

    //Selects Green and Yellow using labels.
    await multidropdownlocator.selectOption([{label:'Green'},{label:'Yellow'}]);
    //Validates the new selection.
    await expect(multidropdownlocator).toHaveValues(['green','yellow']);

    //Selects the first and third options using indexes.
    await multidropdownlocator.selectOption([{index:0},{index:2}]);


    await page.close();

})

test("Custom Dropdown", async ({ page }) => {

    await page.goto("https://demoqa.com/select-menu");

    // Locate the custom dropdown
    const dropdown = page.locator("#withOptGroup");

    // Click to open dropdown
    await dropdown.click();

    // Select Group 1, option 2
    await page.getByText("Group 1, option 2", {
        exact: true
    }).click();

    // Validate selected option
    await expect(dropdown).toContainText("Group 1, option 2");

});