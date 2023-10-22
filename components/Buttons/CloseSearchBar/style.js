import styled from "styled-components";


export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    color: black;
    width: 40px;
    height: 40px;
    border: none;
    background: ${({theme}) => theme.colors.white};
    cursor: pointer;

`