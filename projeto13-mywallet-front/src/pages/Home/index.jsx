import { useNavigate } from "react-router-dom";
import { Button, Container, Footer, Header, Img, Titulo } from "./style";
import img from "./log-out.svg"
//context dados usuario no titulo
export default function Home() {
    let navigate = useNavigate();
    return (
        <Container>
            <Header>
                <Titulo>Olá, {"Fulano"}</Titulo>
                <img src={img} alt="log out" />
            </Header>
            <Footer>
                <Button onClick={() => navigate("/register/:entrada")}>Nova entrada</Button>
                <Button onClick={() => navigate("/register/:saida")}>Nova saida</Button>
            </Footer>

        </Container>
    )
}
