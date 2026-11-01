import dotenv from 'dotenv';
import { EnvironmentConfig } from './EnvironmentConfig';
import { get } from 'node:http';

dotenv.config();

//function getEnvironmentConfig(): EnvironmentConfig {
   // const val = process.env[name];

   // return val;;
//}


export const config = {
    environment: process.env.TEST_ENVIRONMENT || 'local',
    baseUrl: process.env.WEB_BASE_URL || 'http://localhost:3000',
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:3000/api',
    users: {
        user1Password: process.env.USER1_PASSWORD || 'password1',
        user2Password: process.env.USER2_PASSWORD || 'password2',
        user3Password: process.env.USER3_PASSWORD || 'password3',
    },
    api: {
        user1Token: process.env.USER1_TOKEN || '',
        user2Token: process.env.USER2_TOKEN || '',
        user3Token: process.env.USER3_TOKEN || '',
    }
}   