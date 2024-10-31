import { Link } from "react-router-dom"
import styled from "styled-components"
import FadeIn from "./FadeIn"

const Wrapper = styled.div<{ $keyboardHeight?: number }>`
    bottom: ${props =>
        Math.max((props.$keyboardHeight ?? 0) + window.innerHeight * 0.01, window.innerHeight * 0.05) + "px"};
    position: absolute;
`
const Text = styled(Link)<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 331px;
    height: 64px;
    background-color: ${props => (props.$isActive ? props.theme.color.red : "#bcbcbc")};
    border-radius: 13px;
    font-size: 22px;
    color: #ffffff;
    transition: background-color 0.5s ease;
`

interface NextButtonProps {
    to: string
    onClick?: () => void
    keyboardHeight?: number
    isActive?: boolean
}
export default function NextButton({ to, onClick, keyboardHeight, isActive = true }: NextButtonProps) {
    return (
        <Wrapper $keyboardHeight={keyboardHeight}>
            <FadeIn delay="1.5s">
                <Text to={to} onClick={onClick} $isActive={isActive}>
                    {"다음"}
                </Text>
            </FadeIn>
        </Wrapper>
    )
}
