import { AutoComplete, Button, Input, Radio, Checkbox, Space, Select } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setChartType, setIndices } from '../../../state/slices/activeEntities';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { setTimeSeriesData } from '../../../state/slices/analytics';
import { timeSeriesDataOne, timeSeriesDataThree, timeSeriesDataTwo } from '../../../mockdata/timeSeries';


const Search = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const dispatch = useAppDispatch();
    const activeIndices = useAppSelector(state => state.activeEntities.indices)
    const timeSeriesData = useAppSelector(state => state.analytics.timeSeriesData)

    const handleClick = (index: string) => {
        console.log(index)
        if (index !== "Benchmark") {
            dispatch(setIndices({ index: index }))
        }
    }

    const handleSelect = (e: CheckboxChangeEvent) => {
        const id = e.target.value;
        if (id !== "Benchmark") {
            if (timeSeriesData?.some(t => t.stock_id === id)) {
                console.log(id, "exists")
                console.log(timeSeriesData?.filter(i => i.stock_id !== id))
                dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesData?.filter(i => i.stock_id !== id) }))
                // dispatch(setIndices({index:index}))
            }
            else {
                if (id === "MSFT")
                    dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesData.concat(timeSeriesDataTwo) }))
                else if (id === "AAPL")
                    dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesData.concat(timeSeriesDataOne) }))
                else if (id === "GOOG")
                    dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesData.concat(timeSeriesDataThree) }))
                // dispatch(setIndices({index:index}))
            }
        }
    }

    const handleChange = (value: string) => {
        dispatch(setChartType({ chartType: value }))
    }

    const searchResult = (query: string) => ["AAPL", "MSFT", "GOOG"].map(name => {
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
        <>
            <Select
                size="large"
                defaultValue="Pick a chart type"
                style={{ width: 200, margin: 10 }}
                onChange={handleChange}
                options={[
                    { value: 'close', label: 'Close' },
                    { value: 'volume', label: 'Volume' },
                    { value: 'volatility', label: 'Volatility' }
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
            <div style={{ overflowY: "scroll" }}>
                <Radio.Group onChange={() => { ; }} value={1}>
                    <Space direction="vertical">
                        {activeIndices?.map((index) => {
                            return (index === "Benchmark" ? <Checkbox value={index} onChange={handleSelect} checked={true}>{index}</Checkbox>
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