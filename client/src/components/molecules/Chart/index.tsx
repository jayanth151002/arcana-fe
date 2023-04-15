import { Area } from '@ant-design/charts';
import "./styles.css"
import { useState, useEffect } from "react";

type chartItem = {
    year: string,
    value: number,
    type: number
}

const Chart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    }, []);

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'country',
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