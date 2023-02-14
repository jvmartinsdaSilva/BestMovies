import styled from "styled-components";


const ListCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1em;
    
    h2{
        text-transform: capitalize;
    }
    
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
        margin: 2em;
    }

    ul::-webkit-scrollbar{
        border-radius: 10px;
        width: 15px;
        height: 5px ;
    }
    
    ul::-webkit-scrollbar-thumb{
        margin: 1em;
        background: ${({theme}) => theme.colors.white};
        padding: 1em;
        width: 5px;
        height: 5px;
        border-radius: 10px;
    }

    li{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 2em;
        min-width: 120px;
        max-width: 120px;
        height: 300px;
    }

    h3{
        font-size: 14px;
    }

    button{
        margin: 1em 0;      
        padding: .5em 1em;
        border: none;
        background: ${({theme}) => theme.colors.secundary};
        color: ${({theme}) => theme.colors.text};
        cursor: pointer;
    }

    
`

export default ListCategoryContainer
