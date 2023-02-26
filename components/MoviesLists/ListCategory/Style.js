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
        background: ${({ theme }) => theme.colors.white};
        padding: 1em;
        width: 5px;
        height: 5px;
        border-radius: 10px;
    }
    
    li.moreMovies{
        display: flex;
        justify-content: center;
        padding: .5em;

    }

    li.moreMovies button{
        display: flex;
        text-align: start;
        align-items: center;
        margin: 1em 0;
        padding: .5em;
        height: 70%;
        font-size: 20px;
        background: rgba(255, 255, 255, 0.1);
        z-index: 10;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        color: ${({ theme }) => theme.colors.text};
        transition: .3s;
        cursor: pointer;
    }

    li.moreMovies button:hover{
        color: ${({ theme }) => theme.colors.secundary};
    }

    li.moreMovies a{
        text-decoration: none;
    }



`

export default ListCategoryContainer
