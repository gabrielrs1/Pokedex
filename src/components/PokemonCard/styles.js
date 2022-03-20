import styled from "styled-components";

export const BoxContent = styled.div`
    button {
        margin-top: 1rem;
        border: 0;
        border-radius: 50%;

        background: ${props => props.theme.colors.terciary};

        img {
            width: 10rem;
        }
    }
` 