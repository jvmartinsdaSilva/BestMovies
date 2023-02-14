import styled from "styled-components";


const LoadContainer = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid ${({theme}) => theme.colors.white};
    border-left:none ;
    border-top: none;  
    border-radius: 50%;
    animation: spiner .5s linear infinite;

    @keyframes spiner {
        to{
            transform: rotate(360deg);
        }
    }

`

export default LoadContainer