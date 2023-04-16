import { Card, Col, Progress, Row, Statistic } from 'antd';
import "./styles.css"
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react';

interface CumulativeData {
    data: {
        _id: string,
        name: string,
        symbol: string,
        sector: string
        volatility_q1: number,
        volatility_q2: number,
        volatility_q3: number,
        volatility_q4: number,
        correlation_q1: number,
        correlation_q2: number,
        correlation_q3: number,
        correlation_q4: number,
        volatility_predicted: string
    }
}

const Metrics = () => {
    let activeStockSymbol = useSelector((state: RootState) => state.activeEntities.activeCompanySymbol)
    useEffect(() => { }, [activeStockSymbol])
    const { data } = useQuery({
        queryKey: ["stockData"],
        queryFn: async () => {
            if (!activeStockSymbol) { activeStockSymbol = 'AAPL' }
            return await axios.get(
                `https://api.arcana.coursepanel.in/stocks/complete/${activeStockSymbol}`
            )
        },
    }) as { isLoading: boolean, data: CumulativeData }
    return (
        <><Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <span style={{ color: "#bbbbbb" }}>Predicted Risk</span>
                    <Progress percent={Math.round(+data?.data?.volatility_predicted * 10000) / 100} status="active" strokeColor={{ to: '#fa1919', from: '#23fa2a' }} />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Predicted Return"
                        value={data?.data?.correlation_q4}
                        precision={2}
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Latest Correlation"
                        value={data?.data?.correlation_q3}
                        precision={2}
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Volatility Q1"
                        value={data?.data?.volatility_q1}
                        precision={2}
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Volatility Q2"
                        value={data?.data?.volatility_q2}
                        precision={2}
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Volatility Q3"
                        value={data?.data?.volatility_q3}
                        precision={2}
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Volatility Q4"
                        value={data?.data?.volatility_q4}
                        precision={2}
                    />
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default Metrics