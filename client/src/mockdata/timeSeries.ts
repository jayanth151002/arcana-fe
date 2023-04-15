import { TimeSeries } from "../models/timeSeries"

export const generateTimeSeriesData = (stockId: string, startDate: string, days: number): TimeSeries[] => {
    const data: TimeSeries[] = [];

    for (let i = 0; i < days; i++) {
        const date = new Date(new Date(startDate).getTime() + i * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
        const close = 150 + i * 2;
        const volume = 1000 + i * 10;
        const volatility = 1 + i * 0.01;

        data.push({
            stock_id: stockId,
            date,
            close,
            volume,
            volatility,
        });
    }

    return data;
};

export const timeSeriesDataOne = generateTimeSeriesData("AAPL", "2022-03-05", 67);
export const timeSeriesDataTwo = generateTimeSeriesData("MSFT", "2019-10-02", 49);
export const timeSeriesDataThree = generateTimeSeriesData("GOOG", "2020-04-06", 75);
