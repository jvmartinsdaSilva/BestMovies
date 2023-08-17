import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        justify-content: center;
        margin-right:1em ;
`

export const Button = styled.button`
        width: 100px;
        z-index: 1;
        text-align: start;
        margin: .5em ;
        padding: .5em;
        height: 70%;
        font-size: 20px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        transition: .3s;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        border-radius: 0 20px;

        a{
            color: white;
            text-decoration: none;
        }

        &::after{
            content: "";
            display: flex;
            text-align: center;
            justify-items: center;
            width: 100%;
            height: 50%;
            background: ${props => props.theme.colors.secundary};
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(-101%);
            z-index: -1;
        }

        &::before{
            content: "";
            display: flex;
            text-align: center;
            justify-items: center;
            width: 100%;
            height: 50%;
            background: ${props => props.theme.colors.secundary};
            position: absolute;
            /* top: 100; */
            /* left: 0; */
            bottom: 0;
            right: 0;
            transform: translateX(101%);
            z-index: -1;
        }


        &:hover::after {
            transform: translateX(0);
            transition: .5s;
        }
        
        &:hover::before{
            transform: translateX(0);
            transition: .5s;
        }
`