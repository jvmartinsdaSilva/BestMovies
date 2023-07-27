import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        margin: 0 1em;
    }

    p{
        border-top:1px solid ${({ theme }) => theme.colors.text2};
        margin: 1em;
        padding-top: .5em;
    }
    @media screen and (min-width: 768px){
        p{
            margin: 1em;
            text-align: start;
            font-size: 22px;         
        }

        h3{
            margin-left: 1.5em;
        }

        h3 > span{
            color: red  !important;
        }
    }


`

export default Container