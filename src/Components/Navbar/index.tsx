import { LinkIcons } from "../LinkIcons"
import { Container } from "./styles"
import { FaWhatsapp } from 'react-icons/fa'

export function Navbar() {

    function handleContactMe() {
        location.href = "https://api.whatsapp.com/send?phone=5511991977204&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20seu%20site%2C%20podemos%20conversar%3F%20";
    }

    return (
        <Container>
            <div className="avatar">
                <img src="https://github.com/fealex95.png" />
            </div>
            <div className="description">
                <p className="name">Felipe Alexandre</p>
                <p className="role">Desenvolvedor Front-end</p>
            </div>
            <LinkIcons />
            <button onClick={handleContactMe}>
                <FaWhatsapp size={24} /> <span>Entre em contato</span>
            </button>
        </Container>
    )
}