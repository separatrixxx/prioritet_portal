export interface UserInterface {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    role: 'buyer' | 'seller' | 'admin',
    status: 'pending_approval' | 'active' | 'blocked' | 'rejected',
    middle_name: string | undefined,
    phone: string | undefined,
    company_name: string | undefined,
    company_inn: string | undefined,
    company_kpp: string | undefined,
    company_address: string | undefined,
    position: string | undefined,
    email_verified: boolean,
    phone_verified: boolean,
    created_at: string,
}

export interface GuestInterface {
    id: string,
}
