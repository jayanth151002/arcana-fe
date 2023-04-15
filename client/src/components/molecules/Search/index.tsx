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

    const handleClick = (index: string) => {
        if (index !== "Benchmark")
            dispatch(setIndices({ index: index }))
    }

    const handleSelect = (e: CheckboxChangeEvent) => {
        const id = e.target.value;
        if (id === "MSFT")
            dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesDataTwo }))
        else if (id === "AAPL")
            dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesDataOne }))
        else if (id === "GOOG")
            dispatch(setTimeSeriesData({ timeSeriesData: timeSeriesDataThree }))
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
                                {activeIndices?.includes(name) ? "-" : "+"}
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
                defaultValue="Pick a chart type"
                style={{ width: 200 }}
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
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
            <Radio.Group onChange={() => { ; }} value={1}>
                <Space direction="vertical">
                    {activeIndices?.map((index) => {
                        return (
                            <Checkbox value={index} onChange={handleSelect}>{index}</Checkbox>
                        )
                    })}
                </Space>
            </Radio.Group>
        </>
    )
}

export default Search