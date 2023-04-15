import { AutoComplete, Input, Radio, Space } from 'antd';


const Search = () => {
    return (
        <>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: 200 }}
            // options={["a", "b", "c"]}
            //   onSelect={onSelect}
            //   onSearch={handleSearch}
            >
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
            <Radio.Group onChange={() => { ; }} value={1}>
                <Space direction="vertical">
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                </Space>
            </Radio.Group>
        </>
    )
}

export default Search