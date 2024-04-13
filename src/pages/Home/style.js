import styled from "styled-components";

export const Background = styled.div`
    background: url(${props => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const DivInformations = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    z-index: 1;
    gap: 30px;

    h1{
        color: white;
        font-size: 70px;
        width: 600px;
        text-align: start;
    }

    h2{
        color: white;
        width: 750px;
        align-content: end;
        margin-right: 70px;
    }

`

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 35px;
`


export const PosterImg = styled.div`

        z-index: 1;

    img{
        z-index: 1;
        border-radius: 30px;
        margin-left: 40px;
        width: 500px;
    }
`   