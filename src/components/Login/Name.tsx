import { useState } from "react"
import styled from "styled-components"

import { useUserName } from "../../context/UserNameContext"

import Text from "./components/Text"
import NextButton from "./components/NextButton"
import LoginWrapper from "./components/LoginWrapper"
import FadeIn from "./components/FadeIn"

const TextWrapper = styled.div`
    margin: 100px 20px 20px;
`
const FlexWrapper = styled.div`
    display: flex;
`
const Input = styled.input`
    width: 180px;
    padding: 0 10px;
    height: 48px;
    background-color: #d8d8d8;
    border-radius: 10px;
    margin-right: 5px;
    margin-left: 20px;
    font-size: 24px;
`
const Explain = styled.div`
    margin: 0 20px;
    margin-top: 7px;
    font-size: 13px;
    color: #3c3c3c;
    white-space: nowrap;
`

export default function Name() {
    const [name, setName] = useState("")
    const { setUserName } = useUserName()
    const [isActive, setIsActive] = useState(false)
    const [keyboardHeight, setKeyboardHeight] = useState(0)

    if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", () => {
            let visualViewportHeight = window.visualViewport?.height || 0
            let windowHeight = window.innerHeight
            let keyboardHeight = windowHeight - visualViewportHeight
            setKeyboardHeight(keyboardHeight)
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const wordLength = e.target.value.length
        setName(e.target.value)
        if (wordLength >= 2 && wordLength <= 8) setIsActive(true)
        else setIsActive(false)
    }

    const onSubmit = () => {
        setUserName(name + "피자")
    }

    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <FlexWrapper>
                        <Text text={"당신의\u00A0"} />
                        <Text red={true} text={"피자가게"} />
                    </FlexWrapper>
                    <Text text={"이름을 지어볼까요?🍕"} />
                </TextWrapper>
                <FadeIn delay="1s">
                    <FlexWrapper>
                        <Input placeholder="Ex) 어깨, 주름..." onChange={onChange} />
                        <Text red={true} text={"피자"} />
                    </FlexWrapper>
                </FadeIn>
                <FadeIn delay="1.5s">
                    <Explain>{"가게 이름은 2~8자 이내로 한글, 영문, 숫자만 입력 가능합니다."}</Explain>
                </FadeIn>
            </LoginWrapper>
            <NextButton to="/where" onClick={onSubmit} keyboardHeight={keyboardHeight} isActive={isActive} />
        </>
    )
}
