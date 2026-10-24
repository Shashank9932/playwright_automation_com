import  {test as base,expect} from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';

type UiOptions = {
    authenticated: boolean;
}

type UiFixtures = {
    signUpPage: SignUpPage;
    authentication: void;
}

export const test = base.extend<UiFixtures & UiOptions>({
    authenticated: [false, { option: true }],
    storageState: async ({}, use ) => {
        await use({cookies:[],origins:[]});
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },
    authentication: async ({ signUpPage, authenticated }, use) => {
        if (authenticated) {
            const email = process.env.TEST_EMAIL ;
            const password = process.env.TEST_PASSWORD ;
            if (!email || !password) {

                throw new Error(
                'UI_USER_EMAIL and UI_USER_PASSWORD are required',
          );
        }
        }
       await signUpPage.completeSignUp('John', 'Doe',"test@gmail.com", "    123456", signUpPage.signupBtn.page());
    }
})
