import { randomUUID } from 'crypto';

export type SignUpData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export function generateSignUpData(
    overrides: Partial<SignUpData> = {},

): SignUpData {
    const domain = process.env.SIGNUP_EMAIL_DOMAIN || 'example.com';
    const uniqueId = randomUUID();
    const defaultData: SignUpData = {
        firstName: 'John',
        lastName: 'Doe',
        email: `testuser+${uniqueId}@${domain}`,
        password: 'Aa1!${randomUUID()}', // Generate a random password
    };

    return { ...defaultData, ...overrides };
}