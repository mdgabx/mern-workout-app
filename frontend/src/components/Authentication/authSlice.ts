import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    status: 'idle' | 'fulfilled' | 'pending';
    error: string;
}

interface LoginPayload {
    email: string;
    password: string;
    token: string;
}

  export const loginUser = createAsyncThunk<LoginPayload, { email: string, password: string }>(
    'auth/loginUser', 
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
            console.log('response', response)
          
            return { email, password, token: response.data.token };
        } catch (err) {
            
            console.warn('loginUser err', err);
            return rejectWithValue('Login failed'); 
        }
    });

    export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
        return null;
    });


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        status: 'idle',
        error: '',
    } as AuthState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.token = action.payload.token
                state.status = 'fulfilled'
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false,
                state.token = null
            })
    }
})

export default authSlice.reducer;