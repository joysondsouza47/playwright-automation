import {test,expect} from "@playwright/test"
import { timingSafeEqual } from "node:crypto";

test("css locator", async ({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form?utm_source=chatgpt.com");
    await page.locator("html>body>div>div>div>div>div:nth-child(2)>div>form>div>div:nth-child(2)>input#firstName").fill("joyson") //absolute css selector
    await page.locator("html>body>div>div>div>div>div:nth-child(2)>div>form>div>div:nth-child(4)>input[id='lastName']").fill("dsouza") 

    //:nth-child()
    //:first-child()
    //:last-child()
    // tag[attribute^='value']  starts with
    // tag[attribute$ = 'value'] starts with
    // tag[attribute* = 'value'] contains
    // tag[class='value'][id='value]

    await page.locator("input[id='userEmail']").fill("joysondsouza@gmail.com");
    await page.locator("input#userNumber").fill("9945636877")

    await page.locator("form>div:nth-child(3)>div:nth-child(2)>div>input[id='gender-radio-1'][class^='form']").check();

    await page.locator("span[class='css-1u9des2-indicatorSeparator']+div").click();

    await page.waitForTimeout(2000);


    await page.locator("//html/body/div/div/div/div/div[2]/div/form/div/div[2]/input[@id='firstName']").clear() //absolute xpath
    await page.locator("//input[@id='firstName']").fill("john");

    await page.locator("//input[@id='lastName' and @placeholder='Last Name']").clear();
    await page.locator("//input[@id='lastName' or @placeholder='mar']").fill("lobo");

    await page.locator("//input[contains(@id,'Email')]").clear();
    await page.locator("//input[starts-with(@id,'userEm')]").fill("john@gmail.com");

    console.log(await page.locator("//input[text()='Sports']").isVisible());

    await page.waitForTimeout(2000);


    //input[@attribute='value']
    //input[contains(@attribute,'value')]           partial value match
    //input[starts-with(@attribute,'value')]    starts with
    //input[@attribute1='value' and @attribute2 = 'value']
    //input[@attribute1='value' or @attribute2 = 'value']
    //input[text() = 'value']
    //input[contains(text(),'value')]
    //input[last(),'value']
    //input[position()=2]


    // #value
    // tag#value
    // tag[attribute='value']
    // tag.value[attribute='value']
    // html>div>div>.....[]




// Axis	                Meaning                    	            Example
// parent	            Immediate parent	                    //input[@id="username"]/parent::form
// child	            Direct children	                        //form/child::input
// ancestor	            All matching parents up the tree	    //input[@id="username"]/ancestor::body
// descendant	        Elements nested anywhere inside	        //form/descendant::input
// following-sibling	Siblings appearing after the element	//input[@id="username"]/following-sibling::input
// preceding-sibling	Siblings appearing before the element	//input[@id="username"]/preceding-sibling::label
// self	                Current element itself	                //input[@id="username"]/self::input

})