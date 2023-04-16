import { createSlice } from '@reduxjs/toolkit'

export interface activeEntitiesSliceType {
    isSliderOpen: boolean,
    indices: string[],
    chartType: string
    activeSearchString: string,
    activeCompanySymbol: string,
    isModalOpen: boolean;
    dataDump: any

}

export const initialState: activeEntitiesSliceType = {
    isSliderOpen: false,
    indices: ["AAPL"],
    chartType: "volume",
    activeSearchString: "",
    activeCompanySymbol: "",
    isModalOpen: false,
    dataDump: {
        compData: {},
        articles: [],
        numbers: {}
    }
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
        },
        setActiveCompanySymbol: (state, action) => {
            state.activeCompanySymbol = action.payload
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        },
        setDataDumpComp: (state, action) => {
            state.dataDump.compData = action.payload
        },
        setDataDumpArticles: (state, action) => {
            state.dataDump.articles = action.payload
        },
        setDataDumpNumbers: (state, action) => {
            state.dataDump.numbers = action.payload
        }

    }
})

export const { setIsSliderOpen, setIndices, setDataDumpArticles, setChartType, setActiveCompanySymbol, setDataDumpNumbers, setDataDumpComp, setIsModalOpen, setActiveSearchString } = activeEntitiesSlice.actions
export default activeEntitiesSlice.reducer