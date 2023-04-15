import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean,
    indices: string[]
}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false,
    indices: ["Benchmark"]

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
        }
    }
})

export const { setIsSliderOpen, setIndices } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer