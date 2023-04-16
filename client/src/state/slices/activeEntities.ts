import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean,
    indices: string[],
    chartType: string,
    activeCompany: string
}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false,
    indices: ["Benchmark"],
    chartType: "volume",
    activeCompany: ""
}

const activeEntitiesSlice = createSlice({
    name: 'activeEntities',
    initialState,
    reducers: {
        setIsSliderOpen: (state, action) => {
            state.isSliderOpen = action.payload.isSliderOpen
        },
        setIndices: (state, action) => {
            if (!state.indices.includes(action.payload.index)) {
                state.indices.push(action.payload.index)
            }
        },
        setChartType: (state, action) => {
            state.chartType = action.payload.chartType
        },
        setActiveCompany: (state, action) => {
            state.activeCompany = action.payload.activeCompany
        }
    }
})

export const { setIsSliderOpen, setIndices, setChartType, setActiveCompany } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer