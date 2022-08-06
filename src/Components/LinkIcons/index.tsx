import { Container } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";


interface LinkIconsProps {
    link: string;
}


export function LinkIcons() {
    return (
        <Container >
            <a href="https://github.com/fealex95">
                <FaGithub size={28} color="#eee" />
            </a>

            <a href="https://www.linkedin.com/in/felipe-alexandre-b7a99580/">
                <FaLinkedin size={28} color="#eee" />
            </a>

            <a href="https://www.instagram.com/fealexandre95/">
                <FaInstagram size={28} color="#eee" />
            </a>

            <a href="https://www.facebook.com/felipe.alexandre.3348">
                <FaFacebook size={28} color="#eee" />
            </a>
        </Container>
    )
}