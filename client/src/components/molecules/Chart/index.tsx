import { Area } from '@ant-design/charts';
import "./styles.css"
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { timeSeriesDataFour, timeSeriesDataOne, timeSeriesDataTwo } from '../../../mockdata/timeSeries';
import { setTimeSeriesData } from '../../../state/slices/analytics';

const Chart = () => {

    const dispatch = useAppDispatch()
    const chartType = useAppSelector(state => state.activeEntities.chartType)
    const chartData = useAppSelector(state => state.analytics.timeSeriesData)
    const activeIndices = useAppSelector(state => state.activeEntities.indices)

    useEffect(() => {
        dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesDataFour }))
    }, []);

    const config = {
        data: chartData,
        xField: 'date',
        yField: chartType,
        seriesField: "stock_id",
        slider: {
            start: 0,
            end: 1,
        },
    };


    return (
        <div className="chart-main">
            < Area {...config} />
        </div>
    )
}

export default Chart