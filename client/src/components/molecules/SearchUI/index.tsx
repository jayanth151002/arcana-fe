import type { SelectProps } from 'antd/es/select';
import { useState } from 'react'; import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-hooks-web';
import SearchHits from '../SearchHits';
import './styles.css'
import { SearchBox } from '../../atoms/SearchBox';
import { Checkbox, Radio, Select, Space } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TimeSeries } from '../../../models/timeSeries';
import { useAppSelector, useAppDispatch } from '../../../state/hooks';
import { setTimeSeriesData } from '../../../state/slices/analytics';
import { setActiveCompanySymbol, setChartType } from '../../../state/slices/activeEntities';

const searchClient = algoliasearch(
    "AB57CPNYCS",
    "b9479b4210d1a59ca9be2ad35ad194b3"
);

const SearchUI = () => {

    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const dispatch = useAppDispatch();
    const activeIndices = useAppSelector(state => state.activeEntities.indices)
    const timeSeriesData = useAppSelector(state => state.analytics.timeSeriesData)
    const benchmarkTimeSeriesData = useAppSelector(state => state.analytics.benchmarkTimeSeriesData)

    const handleChange = (value: string) => {
        dispatch(setChartType({ chartType: value }))
    }

    const handleSelect = (e: CheckboxChangeEvent) => {
        const id = e.target.value;
        if (id !== "AAPL") {
            if (timeSeriesData?.some(t => t.stock_id === id)) {
                console.log(id, "exists")
                console.log(timeSeriesData?.filter(i => i.stock_id !== id))
                dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesData?.filter(i => i.stock_id !== id) }))
                // dispatch(setIndices({index:index}))
            }
            else {
                fetch(`https://api.arcana.coursepanel.in/stock/timeseries/by-symbol/${id}`, {
                    method: "GET",
                })
                    .then(res => res.json())
                    .then(res => {
                        // console.log("data fetched", res[0])
                        const parserData: TimeSeries[] = res.map((item: any) => {
                            return {
                                stock_id: item.symbol,
                                date: item.ds,
                                close: item.close,
                                volume: item.volume,
                                volatility: item.volatility,
                            }
                        })
                        dispatch(setTimeSeriesData({ timeSeriesData: benchmarkTimeSeriesData.concat(parserData) }))
                    })
                    .catch(err => console.log(err))
            }
        }
    }

    return (
        <> Pick a chart type
            <Select
                size="large"
                defaultValue="volatility"
                style={{ width: 200, margin: 10 }}
                onChange={handleChange}
                options={[
                    { value: 'volatility', label: 'Volatility' },
                    { value: 'close', label: 'Close' },
                    { value: 'volume', label: 'Volume' },
                ]}
            />
            <InstantSearch searchClient={searchClient} indexName={"stock-metadata"}>
                <div className="search-container" >
                    <SearchBox />
                    <SearchHits />
                </div>
            </InstantSearch>
            <div style={{ overflowY: "scroll" }}>
                <Radio.Group onChange={() => { ; }} value={1}>
                    <Space direction="vertical">
                        {activeIndices?.map((index) => {
                            return (index === "AAPL" ? <Checkbox value={index} onChange={handleSelect} checked={true}>{index}</Checkbox>
                                :
                                <Checkbox value={index} onChange={handleSelect}>
                                    <span onClick={() => dispatch(setActiveCompanySymbol(index))} style={{ textDecoration: "underline" }} >{index}</span>
                                </Checkbox>)
                        })}
                    </Space>
                </Radio.Group>
            </div>
        </>
    )
}

export default SearchUI
