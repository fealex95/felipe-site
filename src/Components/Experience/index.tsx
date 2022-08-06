import { Container } from "./styles";

interface ExperienceProps {
    title: string;
    role: string;
    description: string;
    date: string;
}

export function Experience({ title, role, description, date }: ExperienceProps) {
    return (
        <Container>
            <p className='name'>{title}</p>
            <p className='role'>{role}</p>
            <p className='description'>{description}</p>
            <footer>
                <p>{date}</p>
            </footer>
        </Container>
    )
}