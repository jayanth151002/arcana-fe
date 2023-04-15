import { AutoComplete, Button, Input, Radio, Checkbox, Space } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { setIndices } from '../../../state/slices/activeEntities';
import { CheckboxChangeEvent } from 'antd/es/checkbox';


const Search = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const dispatch = useAppDispatch();
    const activeIndices = useAppSelector(state => state.activeEntities.indices)
    const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

    const handleClick = (index: string) => {
        if (index !== "Benchmark")
            dispatch(setIndices({ index: index }))
    }

    const handleSelect = (e: CheckboxChangeEvent) => {
        console.log(e.target)
    }

    const searchResult = (query: string) =>
        new Array(getRandomInt(5))
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`;
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span>
                                Found{' '} {category}
                            </span>
                            <span>
                                <Button>
                                    <span style={{ fontWeight: "700" }} onClick={() => handleClick(category)}>
                                        {activeIndices?.includes(category) ? "-" : "+"}
                                    </span>
                                </Button>
                            </span>
                        </div>
                    ),
                };
            });


    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    return (
        <>
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