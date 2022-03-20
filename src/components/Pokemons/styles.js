import styled from "styled-components";

export const BoxContent = styled.main`
    margin-top: 3rem;

    h1 {
        margin: 0 2rem 2rem 2rem;

        color: ${props => props.theme.colors.text};
    }
`

export const PokemonTable = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    margin: 0 2rem;
`