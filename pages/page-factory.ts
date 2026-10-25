import type { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';


const constructors = {
    login: LoginPage,
    signup: SignUpPage
};


type PageRegistry = {
    [K in keyof typeof constructors]: InstanceType<typeof constructors[K]>
};


export class PageFactory {
    private readonly cache = new Map<keyof PageRegistry, unknown>();

    constructor(private readonly page: Page) {}

    get<K extends keyof PageRegistry>(name: K): PageRegistry[K] {
        const cached = this.cache.get(name);
        if (cached) {
            return cached as PageRegistry[K];
        }
    

    const PageObject = constructors[name];
    const instance = new PageObject(this.page);
    this.cache.set(name, instance);
    return instance as PageRegistry[K]  ;
}   
}