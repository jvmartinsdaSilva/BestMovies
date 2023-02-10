import styled from "styled-components";

const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.text};
    padding: 1em;
    border-bottom: 1px solid ${({theme}) => theme.colors.text};
    cursor: pointer;

`

export default ResultContainer