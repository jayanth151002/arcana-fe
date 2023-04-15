import { Card, Col, Row, Statistic } from 'antd';
import "./styles.css"

const Metrics = () => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <Card bordered={false}>
                    <Statistic
                        title="Active"
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
                        title="Idle"
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
                        title="Idle"
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
                        title="Idle"
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
                        title="Active"
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
                        title="Idle"
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
                        title="Idle"
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
                        title="Idle"
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