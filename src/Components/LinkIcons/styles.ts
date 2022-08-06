import styled from 'styled-components';

export const Container = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;

    a{
        transition: filter 0.3s;
    }

    a:hover{
        filter: brightness(0.7);
    }
`;