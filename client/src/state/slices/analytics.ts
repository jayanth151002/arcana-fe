import { createSlice } from '@reduxjs/toolkit'
import { TimeSeries } from '../../models/timeSeries'

export type chatItem = {
    question: string,
    answer: string
}

export interface analyticsSliceType {
    name: string,
    benchmarkTimeSeriesData: TimeSeries[],
    timeSeriesData: TimeSeries[],
    chat: []
}

export const initialState: analyticsSliceType = {
    name: "",
    benchmarkTimeSeriesData: [],
    timeSeriesData: [],
    chat: []
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
        },
        setBenchmarkTimeSeriesData: (state, action) => {
            state.benchmarkTimeSeriesData = action.payload.benchmarkTimeSeriesData
        }
    }
})

export const { setAnalyticsDetails, setTimeSeriesData, setBenchmarkTimeSeriesData } = analyticsSlice.actions
export default analyticsSlice.reducer