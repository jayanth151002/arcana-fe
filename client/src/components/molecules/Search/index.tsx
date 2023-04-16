import { AutoComplete, Button, Input, Radio, Checkbox, Space, Select } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setChartType, setIndices } from '../../../state/slices/activeEntities';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { setTimeSeriesData } from '../../../state/slices/analytics';
import { TimeSeries } from '../../../models/timeSeries';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
    "AB57CPNYCS",
    "b9479b4210d1a59ca9be2ad35ad194b3"
);

const Search = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const dispatch = useAppDispatch();
    const activeIndices = useAppSelector(state => state.activeEntities.indices)
    const timeSeriesData = useAppSelector(state => state.analytics.timeSeriesData)
    const benchmarkTimeSeriesData = useAppSelector(state => state.analytics.benchmarkTimeSeriesData)

    const handleClick = (index: string) => {
        console.log(index)
        if (index !== "AAPL") {
            dispatch(setIndices({ index: index }))
        }
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
                        console.log("data fetched", res[0])
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

    const handleChange = (value: string) => {
        dispatch(setChartType({ chartType: value }))
    }

    const searchResult = (query: string) => ["A", "MSFT", "MSTR", "MSI"].map(name => {
        return {
            value: name,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span>
                        Found{' '} {name}
                    </span>
                    <span>
                        <Button>
                            <span style={{ fontWeight: "700" }} onClick={() => handleClick(name)}>
                                {activeIndices?.includes(name) ? "✅" : "+"}
                            </span>
                        </Button>
                    </span>
                </div>
            ),
        }
    })



    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    return (
        <>Pick a chart type
            <InstantSearch searchClient={searchClient} indexName={"stock-metadata"}>
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
                <AutoComplete
                    dropdownMatchSelectWidth={252}
                    style={{ width: "90%", margin: 10 }}
                    options={options}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="Search 🔎" enterButton />
                </AutoComplete>
            </InstantSearch>
            <div style={{ overflowY: "scroll" }}>
                <Radio.Group onChange={() => { ; }} value={1}>
                    <Space direction="vertical">
                        {activeIndices?.map((index) => {
                            return (index === "AAPL" ? <Checkbox value={index} onChange={handleSelect} checked={true}>{index}</Checkbox>
                                :
                                <Checkbox value={index} onChange={handleSelect}>{index}</Checkbox>)
                        })}
                    </Space>
                </Radio.Group>
            </div>
        </>
    )
}

export default Search