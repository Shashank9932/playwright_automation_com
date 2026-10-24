import { Locator, Page } from "@playwright/test";


export class SignUpPage {
    
    readonly signupBtn: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly createBtn: Locator
    constructor(page: Page) {
       
        

        this.signupBtn = page.getByRole('link', { name: 'Sign Up' });

        this.firstNameInput = page.locator('input[name="customer[first_name]"]');
        this.lastNameInput = page.locator('input[name="customer[last_name]"]');
        this.emailInput = page.locator('input[name="customer[email]"]');
        this.passwordInput = page.locator('input[name="customer[password]"]');
        this.createBtn = page.getByRole('button', { name: 'Create' });
      
    }

    async completeSignUp(firstName: string, lastName: string, email: string, password: string, page: Page) {
        await page.goto('https://sauce-demo.myshopify.com/');
        await this.signupBtn.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.createBtn.click();
    }
}

