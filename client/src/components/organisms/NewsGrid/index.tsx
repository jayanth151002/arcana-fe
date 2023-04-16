import "./styles.css"
import { Col, Row, FloatButton, Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setIsSliderOpen } from "../../../state/slices/activeEntities";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { StockData } from "../CompanyModal";

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
    const { data: stockData } = useQuery({
        queryKey: ["stockData"],
        queryFn: async () => await axios.get(
            `https://api.arcana.coursepanel.in/stocks/${activeStockSymbol}`
        ),
    }) as { isLoading: boolean, data: StockData }
    console.log(data, stockData);
    return (
        <Row className="news-content">
            <ul>
                <li>
                    <h1><a href={data.website}>{data.name} ({data.symbol})</a></h1>
                    <img src={data.image} alt={data.name} />
                    <h2>CEO : {data.ceo} </h2>
                    <h2>Sector : {data.sector} </h2>
                    <h2>Industry : {data.industry} </h2>
                    <hr />
                    <h3>Range : {data.range} </h3>
                    <h3>Beta : {data.beta} </h3>
                    <h3>Volume Average : {data.volAvg} </h3>
                    <h3>Last dividend paid: {data.lastDiv}</h3>
                    <hr />
                    <h3>Website : {data.website} </h3>
                    <p>{data.description}</p>
                </li>
            </ul>
        </Row>
    )
}

export default NewsGrid