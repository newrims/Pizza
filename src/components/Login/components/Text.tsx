import styled from "styled-components"
import FadeIn from "./FadeIn"

const Wrapper = styled.div<{ $red: boolean }>`
    text-align: left;
    font-size: 35px;
    line-height: 1.3;
    white-space: nowrap;
    font-weight: bold;
    color: ${props => (props.$red ? props.theme.color.red : "#000000")};
`

interface TextProps {
    text: string
    red?: boolean
}

export default function Text({ text, red = false }: TextProps) {
    return (
        <FadeIn delay="0.5s">
            <Wrapper $red={red}>{text}</Wrapper>
        </FadeIn>
    )
}
