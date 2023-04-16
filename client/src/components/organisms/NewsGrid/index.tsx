import "./styles.css"
import { Col, Row, FloatButton, Drawer } from 'antd';
import NewsContent from '../../molecules/NewsContent';
import { WechatOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setIsSliderOpen } from "../../../state/slices/activeEntities";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const NewsGrid = () => {

    const isSliderOpen = useAppSelector((state) => state.activeEntities.isSliderOpen) as boolean
    const dispatch = useAppDispatch();
    const handleSlider = () => {
        dispatch(setIsSliderOpen({ isSliderOpen: !isSliderOpen }))
    }
    const activeStockSymbol = 'AAPL'
    const { data } = useQuery({
        queryKey: ["stockData"],
        queryFn: async () => await axios.get(
            `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${activeStockSymbol}AAPL&apikey=SLLKCQL1JYMRS300`
        ),
    }) as { isLoading: boolean, data: any }
    console.log(data)
    return (
        <Row className="news-content">

            {/* <Col span={24}>
                <NewsContent />
            </Col> */}
            <h1><a href="autodesk.com">Autodesk Inc. | ADSK</a></h1>
            &nbsp; &nbsp; <h4>Autodesk, Inc. is an American multinational software corporation that makes software products and services for the architecture, engineering, construction, manufacturing, media, education, and entertainment industries. Autodesk is headquartered in San Francisco, California, and has offices worldwide.</h4>

            <ul>
                <li>
                    <h2>Autodesk Inc. (ADSK) Q1 2021 Earnings Call Transcript</h2>
                    <img src={"https://media.cnn.com/api/v1/images/stellar/prod/230410115843-01-colorado-river-winter.jpg?c=16x9&q=h_144,w_256,c_fill"} alt={"data.name"} />
                    <h2>CEO :Andrew Anagnost </h2>
                    <h2>Sector : Creativity Tools </h2>
                    <h2>Industry : Software </h2>
                    <hr />
                    <h3>Range :  163.2-235.01</h3>
                    <h3>Beta : 1.512101 </h3>
                    <h3>Volume Average : 1453388</h3>
                    <h3>Last dividend paid: 0.89</h3>
                    <hr />
                </li>
            </ul>
        </Row>
    )
}

export default NewsGrid