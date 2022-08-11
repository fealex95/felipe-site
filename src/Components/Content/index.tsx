import { useEffect, useState } from 'react';
import { api } from '../../services/GitHubApi';
import { Experience } from '../Experience';
import { GitHubRepo } from '../GitHubRepo';
import { Title } from '../Title';
import { Container } from './styles';

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string;
    updated_at: Date;
    language: string;
}

export function Content() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const listFiltered = repositories.filter(repo => repo.name !== 'fealex95')

    useEffect(() => {
        async function getGitHubData() {
            const { data } = await api.get<Repository[]>("/repos");
            setRepositories(data);
        }
        getGitHubData();
    }, []);
    return (
        <Container>
            <div className='content'>
                <div className='aboutMe'>
                    <h1>Sobre mim</h1>
                    <p>Sou Felipe Alexandre, e sou apaixonado em programar, tanto sites e aplicativos Android/IOS</p>
                    <p>Tive meu primeiro contato com a programação aos 15 anos e desde então venho me aperfeiçoando com as melhores tecnologias do mercado</p>
                    <p>Hoje utilizo tecnologias como React e React Native para poder desenvolver todas as minhas aplicações</p>
                </div>

                <Title>
                    Experiências
                </Title>
                <Experience
                    title='Scavasin Tecnologia'
                    role='Programador'
                    description='Programação para Salesforce e administração de sistema. Programação em React e integração de sistema via API.'
                    date='10/2018 - Atual'
                />
                <Experience
                    title='Investiplan'
                    role='Suporte Técnico'
                    description='Suporte a sistemas Windows e Linux, controle de inventário'
                    date='10/2012 - 10/2018'
                />
                <Experience
                    title='Bulgart'
                    role='Estagio de Programador'
                    description='Desenvolvimento de aplicações web com PHP'
                    date='03/2012 - 10/2012'
                />

                <Title>
                    Portifólio
                </Title>
                <div className='githubContainer'>
                    {
                        listFiltered.map(repository => (
                            <GitHubRepo
                                key={repository.id}
                                name={repository.name}
                                description={repository.description}
                                link={repository.html_url}
                                updated_at={repository.updated_at}
                                language={repository.language}
                            />
                        ))
                    }
                </div>
                <div className='tecnologies'>
                    <h1>Tecnologias</h1>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                    </div>
                </div>
            </div>



        </Container >
    )
}