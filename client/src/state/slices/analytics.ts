import { createSlice } from '@reduxjs/toolkit'
import { TimeSeries } from '../../models/timeSeries'

export interface analyticsSliceType {
    name: string,
    timeSeriesData: TimeSeries[]
}

export const initialState: analyticsSliceType = {
    name: "",
    timeSeriesData: []
}

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        setAnalyticsDetails: (state, action) => {
            state.name = action.payload.name
        },
        setTimeSeriesData: (state, action) => {
            state.timeSeriesData = action.payload.timeSeriesData
        }
    }
})

export const { setAnalyticsDetails, setTimeSeriesData } = analyticsSlice.actions
export default analyticsSlice.reducer