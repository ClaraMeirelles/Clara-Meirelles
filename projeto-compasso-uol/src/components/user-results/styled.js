import styled from 'styled-components'

export const CardProfile = styled.header`
    margin:0;
    display: flex;
    padding: 16px 32px;
    justify-content: space-between;
    background-color: rgb(154, 14, 154, 0.7);
    border-radius: 26px;
    border-bottom: none;

    button{
        color: rgb(236,247,244);
    }

    img{
        border-radius: 50%;
        height: 8vh;
    }
    
    p{
        color: rgb(236,247,244);
        text-align: center;
    }
`

export const ShowProfile = styled.section`
    width: 60vw;
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(154, 14, 154, 0.7);
    border-radius: 30px;
    padding: 0;
`
