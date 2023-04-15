import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean,
    indices: string[],
    chartType: string
}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false,
    indices: ["Benchmark"],
    chartType: "volume"
}

const activeEntitiesSlice = createSlice({
    name: 'activeEntities',
    initialState,
    reducers: {
        setIsSliderOpen: (state, action) => {
            state.isSliderOpen = action.payload.isSliderOpen
        },
        setIndices: (state, action) => {
            if (state.indices.includes(action.payload.index)) {
                state.indices = state.indices.filter(index => index !== action.payload.index)
            } else
                state.indices.push(action.payload.index)
        },
        setChartType: (state, action) => {
            state.chartType = action.payload.chartType
        }
    }
})

export const { setIsSliderOpen, setIndices, setChartType } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer