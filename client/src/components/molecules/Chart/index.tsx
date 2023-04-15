import { Area } from '@ant-design/charts';
import "./styles.css"
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { timeSeriesDataOne } from '../../../mockdata/timeSeries';
import { setTimeSeriesData } from '../../../state/slices/analytics';

const Chart = () => {

    const dispatch = useAppDispatch()
    const chartType = useAppSelector(state => state.activeEntities.chartType)
    const chartData = useAppSelector(state => state.analytics.timeSeriesData)

    useEffect(() => {
        dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesDataOne }))
    }, []);

    const config = {
        data: chartData,
        xField: 'date',
        yField: chartType,
        // seriesField: statType,
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