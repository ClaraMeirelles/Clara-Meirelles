import styled from "styled-components"
export const Repositories = styled.section`
display: flex;
flex-direction: column;
`
export const RepositoryCard = styled.article`
    border-bottom: 3px solid rgba(3, 236, 236, 0.5);
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
    align-items: center;
    :last-child{
        border:none;
    }
    button{
        height: fit-content;
        color: rgb(154, 14, 154, 0.7);
    }
`