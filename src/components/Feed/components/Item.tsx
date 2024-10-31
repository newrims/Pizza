import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Header = styled.div``
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #8d8d8d;
`
export default function Item() {
    return (
        <Wrapper>
            <Header>
                <Profile />
            </Header>
        </Wrapper>
    )
}