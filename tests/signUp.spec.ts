import {  expect } from '@playwright/test';
import { SignUpPage  } from '../pages/SignUpPage';
import { Page } from '@playwright/test';
import { test } from '../fixtures/ui-test';


test.use({ authenticated: false });


test('Sign Up', async ({pages,signupData }) => { 

    const signuppage =pages.get('signup');
    
  
  await signuppage.completeSignUp(signupData);

}
)