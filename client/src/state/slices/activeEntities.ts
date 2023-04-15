import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean
}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false
}

const activeEntitiesSlice = createSlice({
    name: 'activeEntities',
    initialState,
    reducers: {
        setIsSliderOpen: (state, action) => {
            state.isSliderOpen = action.payload.isSliderOpen
        }
    }
})

export const { setIsSliderOpen } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer