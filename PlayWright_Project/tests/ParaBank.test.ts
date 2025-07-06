import { expect, Expect,test} from "@playwright/test";
test("Register feature Test",async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const regBtn=page.locator("//div[@id='loginPanel']/p[2]/a");
    await regBtn.click();
    const fn=page.locator("//input[@id='customer.firstName']");
    await fn.fill("Gayathri");
    const ln=page.locator("//input[@id='customer.lastName']");
    await ln.fill("R");
    const add=page.locator("//input[@id='customer.address.street']");
    await add.fill("abc street");
    const city=page.locator("//input[@id='customer.address.city']");
    await city.fill("Salem");
    const state=page.locator("//input[@id='customer.address.state']");
    await state.fill("Tnadu");
    const zip=page.locator("//input[@id='customer.address.zipCode']");
    await zip.fill("123456");
    const ph=page.locator("//input[@id='customer.phoneNumber']");
    await ph.fill("1234567890");
    const ssn=page.locator("//input[@id='customer.ssn']");
    await ssn.fill("1234");
    const uname=page.locator("//input[@name='customer.username']");
    await uname.fill("testdemo190");
    const pword=page.locator("//input[@name='customer.password']");
    await pword.fill("pass@123");
    const cpass=page.locator("//input[@name='repeatedPassword']");
    await cpass.fill("pass@123");
    const reg=page.locator(".button[value='Register']");
    await reg.click();
    const text=page.locator("//div[@id='rightPanel']/p");
    await expect(text).toHaveText("Your account was created successfully. You are now logged in.");
    await page.waitForTimeout(3000);
});

test("Login feature Test",async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const uname=page.locator("//input[@name='username']");
    await uname.fill("testdemo123");
    const pword=page.locator("//input[@name='password']");
    await pword.fill("pass@123");
    const login=page.locator("(//input[@class='button'])[1]");
    await login.click();
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");
    await page.waitForTimeout(3000);
});

