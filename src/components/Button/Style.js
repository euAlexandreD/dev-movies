import styled, {css} from "styled-components";

export const buttonStyles = css`
        width: 170px;
        height: 60px;
        background-color: transparent;
        border-radius: 25px;
        border: 3px solid white;
        color: white;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        transition: 300ms ease-in-out;

        &:hover{
            transform: scale(1.2);
        }

        &:active{
            background-color: red;
            opacity: 0.7;
            border: none;
            box-shadow: 0px 0px 25px red;
        }
`

export const ButtonRed = styled.button`
    ${buttonStyles}

    background: red;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb9(255 0 0 / 30%);
        background: red;
        color: #fff;
    }
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`
