import { createSlice } from '@reduxjs/toolkit'

export interface analyticsSliceType {
    name: string
}

export const initialState: analyticsSliceType = {
    name: ""
}

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        setAnalyticsDetails: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const { setAnalyticsDetails } = analyticsSlice.actions
export default analyticsSlice.reducer