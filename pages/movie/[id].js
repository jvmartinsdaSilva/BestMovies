import styled from "styled-components"



export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '145' } }],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params

    return {
        props: {
            id
        }
    }
}

const Container = styled.div`
    display: flex;
    padding: 3em;
    background: white;

`


const Movie = ({ id }) => {
    return <Container>Movie {id}</Container>
}

export default Movie