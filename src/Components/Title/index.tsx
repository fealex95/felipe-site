import { Container } from './styles';

interface TitleProps {
    children: React.ReactChild;
}

export function Title({ children }: TitleProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}