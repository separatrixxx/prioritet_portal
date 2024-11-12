import { createSlice } from '@reduxjs/toolkit';
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    role: 'buyer',
    status: 'pending_approval',
    middle_name: undefined,
    phone: undefined,
    company_name: undefined,
    company_inn: undefined,
    company_kpp: undefined,
    company_address: undefined,
    position: undefined,
    email_verified: false,
    phone_verified: false,
    created_at: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userData,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserDefault: (state) => {
            state.user = userData
        },
    },
});

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;
