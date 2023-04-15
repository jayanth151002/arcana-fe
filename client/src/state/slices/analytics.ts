import { createSlice } from '@reduxjs/toolkit'

export interface analyticsSliceType {
    name: string
}

export const initialState: analyticsSliceType = {
    name: ""
}

const userSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        setAnalyticsDetails: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const { setAnalyticsDetails } = userSlice.actions
export default userSlice.reducer