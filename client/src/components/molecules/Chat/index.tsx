import { answers } from "../../../mockdata/answers"
import { useState } from 'react'

const Chat = () => {
    const [answer, setAnswer] = useState<string>(answers[Math.floor(Math.random() * answers.length)])
    return (
        <>
            Chat
        </>
    )
}

export default Chat