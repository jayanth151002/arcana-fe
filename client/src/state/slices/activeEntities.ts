import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean,
    indices: string[],
    chartType: string
    activeSearchString: string,
}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false,
    indices: ["AAPL"],
    chartType: "volume",
    activeSearchString: ""
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
        setActiveSearchString: (state, action) => {
            state.activeSearchString = action.payload
        }
    }
})

export const { setIsSliderOpen, setIndices, setChartType, setActiveSearchString } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer