import { Card, Col, Progress, Row, Statistic } from 'antd';
import "./styles.css"
import { useEffect } from 'react';

const Metrics = () => {

    useEffect (()=>{
        
    },[])

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <span style={{ color: "#bbbbbb" }}>Predicted Correlation</span>
                    <Progress percent={45} status="active" strokeColor={{ to: '#fa1919', from: '#23fa2a' }} />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Return"
                        value={9.3}
                        precision={2}
                        // valueStyle={{ color: '#cf1322' }}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Predicted Risk"
                        value={9.3}
                        precision={2}
                        // valueStyle={{ color: '#cf1322' }}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Q1 Volatility"
                        value={11.28}
                        precision={2}
                        // valueStyle={{ color: '#3f8600' }}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Q2 Volatility"
                        value={9.3}
                        precision={2}
                        // valueStyle={{ color: '#cf1322' }}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Q3 Volatility"
                        value={9.3}
                        precision={2}
                        // valueStyle={{ color: '#cf1322' }}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Q4 Volatility"
                        value={9.3}
                        precision={2}
                        // valueStyle={{ color: '#cf1322' }}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    )
}

export default Metrics