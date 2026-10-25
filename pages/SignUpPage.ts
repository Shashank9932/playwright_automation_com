import { Locator, Page } from "@playwright/test";


export class SignUpPage {

    constructor(private readonly page: Page) {}
    
  
       
        

      //  this.signupBtn = page.getByRole('link', { name: 'Sign Up' });

       // this.firstNameInput = page.locator('input[name="customer[first_name]"]');
        //this.lastNameInput = page.locator('input[name="customer[last_name]"]');
        //this.emailInput = page.locator('input[name="customer[email]"]');
        //this.passwordInput = page.locator('input[name="customer[password]"]');
        //this.createBtn = page.getByRole('button', { name: 'Create' });
      
   // }

    async completeSignUp(firstName: string, lastName: string, email: string, password: string, page: Page): Promise<void> {
        await this.page.goto('https://sauce-demo.myshopify.com/');
        await this.page.getByRole('link', { name: 'Sign Up' }).click();
        await this.page.locator('input[name="customer[first_name]"]').fill(firstName);
        await this.page.locator('input[name="customer[last_name]"]').fill(lastName);
        await this.page.locator('input[name="customer[email]"]').fill(email);
        await this.page.locator('input[name="customer[password]"]').fill(password);
        await this.page.getByRole('button', { name: 'Create' }).click();
    }
}

