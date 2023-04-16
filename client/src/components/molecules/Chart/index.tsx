import { Area } from '@ant-design/charts';
import "./styles.css"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setBenchmarkTimeSeriesData, setTimeSeriesData } from '../../../state/slices/analytics';
import { TimeSeries } from '../../../models/timeSeries';

const Chart = () => {

    const dispatch = useAppDispatch()
    const chartType = useAppSelector(state => state.activeEntities.chartType)
    const chartData = useAppSelector(state => state.analytics.timeSeriesData)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/stock/timeseries/by-symbol/AAPL`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(res => {
                const parserData: TimeSeries[] = res.map((item: any) => {
                    return {
                        stock_id: item.symbol,
                        date: item.ds,
                        close: item.close,
                        volume: item.volume,
                        volatility: item.volatility,
                    }
                })
                dispatch(setBenchmarkTimeSeriesData({ benchmarkTimeSeriesData: parserData }))
                dispatch(setTimeSeriesData({ timeSeriesData: parserData }))
            })
            .catch(err => console.log(err))
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