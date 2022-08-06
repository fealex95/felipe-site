import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    padding-left: 321px;

    @media screen and (max-width: 600px){
        padding: 0;
    }

    .content{
        padding: 2rem;
        font-family: 'Open Sans';

        .aboutMe{
            margin-bottom: 1rem;
        }

        h1{
            font-family: 'Open Sans';
            font-weight: 100;
            
        }

        p{
            font-family: 'Open Sans';
            font-size: 1rem;
            line-height: 2rem;
        }


    }

    .githubContainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.75rem;

        @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        }

    }
    
    .tecnologies{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            font-weight: 100;
            margin-top: 1rem;
            font-size: 1.5rem;
        }

        div{
            margin-top: 10px;
            img{
                width: 50px;
                margin: 10px;
            }
        }

        
    }
`;