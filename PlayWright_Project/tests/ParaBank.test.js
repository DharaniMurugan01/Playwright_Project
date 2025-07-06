"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("Register feature Test", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const regBtn = page.locator("//div[@id='loginPanel']/p[2]/a");
    yield regBtn.click();
    const fn = page.locator("//input[@id='customer.firstName']");
    yield fn.fill("Gayathri");
    const ln = page.locator("//input[@id='customer.lastName']");
    yield ln.fill("R");
    const add = page.locator("//input[@id='customer.address.street']");
    yield add.fill("abc street");
    const city = page.locator("//input[@id='customer.address.city']");
    yield city.fill("Salem");
    const state = page.locator("//input[@id='customer.address.state']");
    yield state.fill("Tnadu");
    const zip = page.locator("//input[@id='customer.address.zipCode']");
    yield zip.fill("123456");
    const ph = page.locator("//input[@id='customer.phoneNumber']");
    yield ph.fill("1234567890");
    const ssn = page.locator("//input[@id='customer.ssn']");
    yield ssn.fill("1234");
    const uname = page.locator("//input[@name='customer.username']");
    yield uname.fill("testdemo190");
    const pword = page.locator("//input[@name='customer.password']");
    yield pword.fill("pass@123");
    const cpass = page.locator("//input[@name='repeatedPassword']");
    yield cpass.fill("pass@123");
    const reg = page.locator(".button[value='Register']");
    yield reg.click();
    const text = page.locator("//div[@id='rightPanel']/p");
    yield (0, test_1.expect)(text).toHaveText("Your account was created successfully. You are now logged in.");
    yield page.waitForTimeout(3000);
}));
(0, test_1.test)("Login feature Test", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const uname = page.locator("//input[@name='username']");
    yield uname.fill("testdemo123");
    const pword = page.locator("//input[@name='password']");
    yield pword.fill("pass@123");
    const login = page.locator("(//input[@class='button'])[1]");
    yield login.click();
    yield (0, test_1.expect)(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");
    yield page.waitForTimeout(3000);
}));
