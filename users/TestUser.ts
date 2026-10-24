export interface TestUserData{
    key: string;
    email: string;
}

export class TestUser {
    constructor(private readonly data: TestUserData, 
               private readonly password: string) {}


get key(): string {
    return this.data.key;
}

get email(): string {
    return this.data.email;
}

getpassword(): string {
    return this.password;
}
    }

