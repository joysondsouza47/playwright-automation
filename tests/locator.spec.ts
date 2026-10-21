import {test,expect} from "@playwright/test"

test("locators", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/?utm_source=chatgpt.com")
    const headingtext = await page.getByRole('heading',{name:"Welcome to the-internet"}).innerText();  //heading
    console.log(headingtext);
    const headingtext2 = await page.getByRole('heading',{name:"Available Examples"}).innerText(); //heading
    console.log(headingtext2);
    await page.getByRole('link',{name:"Add/Remove Elements"}).click();  //link


    
    await page.getByRole('button',{name:"Add Element"}).click();  //button
    await page.getByRole('button',{name:"Delete"}).click();  //button

await page.goBack();

    await page.getByRole('link',{name:"Checkboxes"}).click(); 
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('checkbox').nth(1).check();  

    // await page.close()


//getByLabel & getByPlaceholder

    await page.goto("https://demoqa.com/automation-practice-form?utm_source=chatgpt.com");
    await page.getByPlaceholder('First Name').fill("joyson");
    await page.getByPlaceholder('Last Name').fill("joysondsouza@gmail.com")
    await page.waitForTimeout(2000);


//getByText

    await expect(page.getByText('Student Registration')).toBeVisible();
    await expect(page.getByText('Student Registration Form',{exact:true})).toBeVisible();

    /*
<p>Login Successful</p>
<p>Login Successful for Admin</p>
<p>LOGIN SUCCESSFUL</p>
getByText('Login Successful')	All three paragraphs
getByText('Login Successful',   { exact: true })	Only the first paragraph
getByText(/Login Successful/)	First and second paragraphs
getByText(/Login Successful/i)	All three paragraphs
getByText(/^Login Successful$/)	Only the first paragraph

/.../	Regular expression	/Login/
i	Ignore case	/login/i
^	Starts with	/^Login/
$	Ends with	/Successful$/
^...$	Match the complete text	/^Login Successful$/
.*	Any number of characters	/Login.*Successful/


<img src="logo.png" alt="Company Logo">
<img src="banner.png" alt="Company Logo Banner">
<img src="profile.png" alt="User Profile">

getByAltText('Company Logo')	First and second
getByAltText('Company Logo', { exact: true })	First only
getByAltText(/company logo/i)	First and second
getByAltText(/^Company Logo$/i)	First only
Remember: getByAltText() searches the alt attribute, not the image's filename or visible surrounding text.


<button title="Close Window">X</button>
<button title="Close All Windows">Close All</button>

Locator	Result
getByTitle('Close')	Matches both
getByTitle('Close Window', { exact: true })	Matches first only
getByTitle(/close/i)	Matches both
getByTitle(/^Close Window$/i)	Matches first only
The matching rules are similar to getByAltText().

getByTestId() is a Playwright locator method used to identify HTML elements using a test-specific attribute, which is data-testid by default.
<input data-testid="username-input" type="text">
<input data-testid="password-input" type="password">
<button data-testid="login-button">Login</button>

Playwright code:
await page.getByTestId('username-input').fill('admin');
await page.getByTestId('password-input').fill('admin123');
await page.getByTestId('login-button').click();

<button data-qa="submit-btn">Submit</button>
import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        testIdAttribute: 'data-qa'
    }
});

await page.getByTestId('submit-btn').click();
*/


})