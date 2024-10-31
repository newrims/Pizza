import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
`

export default function LoginWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper>{children}</Wrapper>
}
