import styled from "styled-components";


export const Button = styled.button`
    margin: 1em 0;      
    padding: .5em 1em;
    border: none;
    background: ${({ theme }) => theme.colors.secundary};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme.colors.secundary_bold};
        transition: .5s;

    }
`
