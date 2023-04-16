import { Col, Row } from 'antd';
import { Link } from 'wouter';
import "./styles.css"

const Topbar = () => {
    return (
        <>
            <Row>
                <Col flex="auto">
                    <h1>Copilot for Investors</h1>
                </Col>
                <Col flex="100px">
                    <Link to="/" style={{ color: "white" }}>Charts</Link>
                </Col>
                <Col flex="100px">
                    <Link to="/news" style={{ color: "white" }}>News</Link>
                </Col>
            </Row>
        </>
    )
}

export default Topbar