/**
 * User
 * A User
 */
declare interface User {
    id?: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { User };
