import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--aside-color);
    width: 320px;
    position: fixed;
    padding: 0px 30px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 600px){
        width: 100%;
        height: 85vh;
        position: relative;
    }

    .avatar {
        width: 240px;
        height: 240px;        
    }

    .avatar > img {
        width: 240px;
        height: 240px;
        border-radius: 120px;
    }

    .description {
        margin-top: 2rem;
        text-align: center;
    }

    .description > .name {
        font-size: 1.5rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 100;
    }

    .description > .role{
        font-size: 1rem;
        font-weight: 400;
        line-height: 3rem;
        color: #777;
    }

    button{
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        background-color: var(--button-color);
        color: #fff;
        cursor: pointer;
        transition: 0.3s filter;
        display: flex;
        justify-content: center;
        align-items: center;

        span{
            margin-left: 10px;
            font-family: "Open Sans", sans-serif;
            font-weight: 700;
            
        }
    }

    button:hover{
        filter: opacity(0.7);
    }
`;