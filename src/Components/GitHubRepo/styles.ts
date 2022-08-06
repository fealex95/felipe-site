import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    display: flex;

    background-color: var(--aside-color);
    margin-top: 0.75rem;
    border-radius: 8px;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #333;

    img{
        width: 40px;
        height: 40px;
    }

    a {
        text-decoration: none;
        padding-right: 5px;
        display: block;
        color: var(--font-color);
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
        transition: filter 0.3s;
    }
            
    a:hover{
        filter: brightness(0.7);
    }

    .description {
        font-size: 0.75rem;                
        margin-bottom: 1rem;
        padding-right: 0.75rem;
    }

    .updatedAt{
        font-size: 0.75rem;
        color: #777;
    }
`;