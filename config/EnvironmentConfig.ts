export interface EnvironmentConfig {
    baseUrl: string;
    apiEndpoint: string;
    /*
    timeout: number;
    retries: number;
    headless: boolean;
    slowMo: number;
    viewportWidth: number;
    viewportHeight: number;
    */
   users: {
        user1Password: string;
        user2Password: string;
        user3Password: string;
    };

    api: {
        user1Token: string;
        user2Token: string;
        user3Token: string;
    };
}