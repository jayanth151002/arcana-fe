import { Button, Col, Row } from 'antd';
import { Link, useLocation } from 'wouter';
import "./styles.css"

const Topbar = () => {
    const navigate = useLocation()[1]
    const handleClick = (path: string) => {
        navigate(path)
    }
    return (
        <>
            <Row>
                <Col flex="auto">
                    <h1>Copilot for Investors</h1>
                </Col>
                <Col flex="100px">
                    <Button onClick={() => handleClick("/")}>
                        Charts
                    </Button>
                </Col>
                <Col flex="100px">
                    <Button onClick={() => handleClick("/news")}>
                        News
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default Topbar