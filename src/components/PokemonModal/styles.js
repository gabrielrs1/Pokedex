import styled from "styled-components";

export const BoxContent = styled.div`
    color: ${props => props.theme.colors.text};

    img {
        width: 10rem;
    }

    li {
        list-style: none;
    }
`