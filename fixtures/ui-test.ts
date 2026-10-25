import  {test as base,expect} from '@playwright/test';
import { PageFactory } from '../pages/page-factory';
import { generateSignUpData, type SignUpData } from '../data/signup-data';
import { Sign } from 'node:crypto';

type UiOptions = {
    authenticated: boolean;
}

type UiFixtures = {
    pages: PageFactory;
    signupData:  SignUpData;
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
    signupData: async ({}, use) => {
        
        await use(generateSignUpData());
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
     
    }
    
})
