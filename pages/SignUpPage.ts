import { Locator, Page } from "@playwright/test";
import type { SignUpData } from "../data/signup-data";


export class SignUpPage {
    
    readonly signupBtn: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly createBtn: Locator
    constructor(private readonly page: Page) {
       
        

        this.signupBtn = page.getByRole('link', { name: 'Sign Up' });

        this.firstNameInput = page.locator('input[name="customer[first_name]"]');
        this.lastNameInput = page.locator('input[name="customer[last_name]"]');
        this.emailInput = page.locator('input[name="customer[email]"]');
        this.passwordInput = page.locator('input[name="customer[password]"]');
        this.createBtn = page.getByRole('button', { name: 'Create' });
      
    }

    async completeSignUp(data: SignUpData): Promise<void> {
        await this.page.goto('/');
        await this.signupBtn.click();
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
        await this.passwordInput.fill(data.password);
        await this.createBtn.click();
    }
}

