import { Button, Card, Col, Input, Row } from "antd"
import { Configuration, OpenAIApi } from "openai";
import "./styles.css"
import { useState } from 'react'

const Chat = () => {
    const [prompt, setPrompt] = useState("")
    const configuration = new Configuration({
        organization: process.env.REACT_APP_ORG_ID,
        apiKey: process.env.REACT_APP_AI_KEY,
    });
    const openai = new OpenAIApi(configuration)

    const handleClick = async () => {
        await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: prompt,
            temperature: 0.3,
            max_tokens: 300,
        })
            .then((res: any) => {
                console.log(res?.data?.choices[0]?.text as string)
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Row align="bottom" className="chat-main" style={{ display: "flex", flexDirection: "column-reverse", overflowY: "auto" }}>
                <Col style={{ textAlign: "center", padding: "15px" }} span={24}>
                    <span>
                        <Input placeholder="Chat with AI" prefix={"💬"} style={{ width: 600 }} onChange={e => setPrompt(e.target.value)} />
                        <Button type="primary" onClick={handleClick}>Go</Button>
                    </span>
                </Col>
                <Row>
                    <Col style={{ textAlign: "center", padding: "15px" }} span={12}>
                        <Card style={{ width: 300 }}>
                            Hello
                        </Card>
                    </Col>
                    <Col style={{ textAlign: "center", padding: "15px" }} span={12} offset={12}>
                        <Card style={{ width: 300 }}>
                            Hi
                        </Card>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Chat