import { Container } from "./styles";

interface GitHubRepoProps {
    name: string;
    link: string;
    description: string;
    updated_at: Date;
    language: string;
}

const langImages = {
    'TypeScript': "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    'Python': "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    'HTML': "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    'JavaScript': "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    'React Framework': "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
}

export function GitHubRepo({ name, link, description, updated_at, language }: GitHubRepoProps) {
    return (
        <Container>
            <div>
                <a href={link}>{name}</a>
                <p className='description'>{description}</p>
                <p className='updatedAt'>Última atualização: {new Intl.DateTimeFormat("pt-BR").format(new Date(updated_at))}</p>
            </div>
            <img src={langImages[language]} alt="" />
        </Container>
    )
}