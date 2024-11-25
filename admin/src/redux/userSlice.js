import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    accessToken: '',
    isLoading: false,
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const {name, email, accessToken} = action.payload
            
            state.name = name || email;
            state.email = email;
            state.accessToken = accessToken
        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.accessToken = ''
        }
    }
})
export const { updateUser, resetUser } = userSlide.actions
export default userSlide.reducer