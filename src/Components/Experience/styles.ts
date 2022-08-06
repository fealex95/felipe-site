import styled from "styled-components";

export const Container = styled.div` 
    margin: 30px 30px;

    .name{
        font-size: 1.2rem;
        font-weight: 600;
    }

    .role{
        font-size: 0.8rem;
        color: #777;
    }

    .description{
        line-height: 2rem;
        font-family: "Inter";
    }

    footer{
        font-size: 0.8rem;
    }

    @media screen and (max-width: 600px) {
        margin: 30px 10px
    }
`;