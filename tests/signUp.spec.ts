import {  expect } from '@playwright/test';
import { SignUpPage  } from '../pages/SignUpPage';
import { Page } from '@playwright/test';
import { test } from '../fixtures/ui-test';


test.use({ authenticated: false });


test('Sign Up', async ({page }) => { 

    const signuppage = new SignUpPage(page);
  
  await signuppage.completeSignUp('John', 'Doe', 'test@gmail.com', '123456', page);

}
)