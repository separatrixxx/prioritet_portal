export interface UserInterface {
    id: number,
    name: string,
    email: string,
    role: 'customer' | 'manager',
    location: string,
    work: string,
}
