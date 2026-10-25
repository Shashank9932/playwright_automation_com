import  {test as base,expect} from '@playwright/test';
import { PageFactory } from '../pages/page-factory';

type UiOptions = {
    authenticated: boolean;
}

type UiFixtures = {
    pages: PageFactory;
    authentication: void;
}

export const test = base.extend<UiFixtures & UiOptions>({
    authenticated: [false, { option: true }],
    storageState: async ({}, use ) => {
        await use({cookies:[],origins:[]});
    },
    pages: async ({ page }, use) => {
        //const signUpPage = new SignUpPage(page);
        await use(new PageFactory(page));
    },
    authentication: async ({  authenticated, pages }, use) => {
        if (authenticated) {
            const email = process.env.TEST_EMAIL ;
            const password = process.env.TEST_PASSWORD ;
            if (!email || !password) {

                throw new Error(
                'UI_USER_EMAIL and UI_USER_PASSWORD are required',
          );
        }
        }

       const signup = pages.get('signup'); 
       await signup.completeSignUp('John', 'Doe',"test@gmail.com", "    123456", signup.signupBtn.page());
    }
})
