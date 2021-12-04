import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ShopItems } from "../../components/ShopItems";
import { Container } from "./styles";

export const Home = () => {
    return(
        <Container>
            <Header />
            <ShopItems />
            <Footer />
        </Container>
    );   
}