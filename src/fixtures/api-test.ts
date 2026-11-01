import 'dotenv/config';
import { test as base , expect } from '@playwright/test';

import {
    Configuration,
    PetApi,
    StoreApi,
    UserApi,
} from '../api/generated';


type ApiFixtures = {
    apiConfig: Configuration;
    petApi: PetApi;
    storeApi: StoreApi;
    userApi: UserApi;
}


export const test = base.extend<ApiFixtures>({
    apiConfig: async ({}, use) => {
        const basePath = process.env.API_ENDPOINT || 'http://localhost:3000/api';
            if (!basePath) {
                throw new Error('API_ENDPOINT is not defined in the environment variables');
            }

            await use(
                new Configuration({
                    basePath: basePath.replace(/\/$/, ''), // Remove trailing slash if present
                }),
            );
        },
        petApi: async ({ apiConfig }, use) => {
          await use(new PetApi(apiConfig));
           },
        storeApi: async ({ apiConfig }, use) => {
          await use(new StoreApi(apiConfig));
              },
        userApi: async ({ apiConfig }, use) => {
            await use(new UserApi(apiConfig));
              },
            });

            export { expect };
        