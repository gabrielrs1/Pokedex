import styled from "styled-components";

export const BoxContent = styled.form`
    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 0;
        padding: 0.3rem 1rem;

        background: #f1f1f1;
    }

    button {
        border: 0;
        border-radius: 0.3rem;

        height: 2.5rem;
        padding: 0 1rem;

        transition: 0.2s;
    
        &:hover {
            filter: brightness(0.9);
        }
    }
`