import { Locator, Page } from "@playwright/test";


export class LoginPage {
    
    readonly loginLink: Locator
    readonly customerLoginHeading: Locator
    readonly emailAddressLabel: Locator
    readonly emailAddressTextBox: Locator
    readonly passwordLabel: Locator
    readonly passwordTextBox: Locator
    readonly forgotYourPasswordLink: Locator
    readonly signInBtn: Locator
    readonly captchaChallange: Locator
    readonly captchaVerifyAnswersBtn: Locator
    constructor(page: Page) {
       
        

        this.loginLink = page.getByRole('link', { name: 'Log In' });
        this.customerLoginHeading = page.getByRole('heading', { name: 'Customer Login' });
        this.emailAddressLabel = page.getByText('Email Address');
        this.emailAddressTextBox = page.getByRole('textbox', { name: 'Email Address' });
        this.passwordLabel = page.getByText('Password', { exact: true });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.forgotYourPasswordLink = page.getByRole('paragraph').filter({ hasText: 'Forgot your password?' });
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });
        this.captchaChallange = page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('img', { name: 'Image-based CAPTCHA challenge' });
        this.captchaVerifyAnswersBtn = page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' });
     
      
    }
}