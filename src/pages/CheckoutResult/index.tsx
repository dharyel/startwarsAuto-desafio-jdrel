import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

import {observer} from 'mobx-react-lite';
import ShopCartStore from "../../stores/ShopCartStore"; 
import {useContext} from 'react';

import {
    Container,
    CheckoutResultInfos,
    ResultTitle,
    ResultMessage,
    CheckoutResultsWrapper,
    GoToHomeButton
} from './styles';

const CheckoutResult = () => {
    const ShopStore = useContext(ShopCartStore);
    const { boughtItem, purchaseSucced } = ShopStore;

    const navigate = useNavigate();

    const BackToHome = () => {
        navigate('/');
    }

    const GetPurchaseMsg = () =>{
        if (!boughtItem) {
            navigate('/');
            return;
        }

        const message = `You have just purchased the item '${boughtItem.name}'`;

        return (purchaseSucced ? message : '');
    }
    
    

    return (
        <Container>
            <Header />
                <CheckoutResultsWrapper>
                    <CheckoutResultInfos>
                        <ResultTitle isSucced={purchaseSucced}>The purchase of your item was a {purchaseSucced ? 'success' : 'failure'} !</ResultTitle>
                        <ResultMessage>{GetPurchaseMsg()}</ResultMessage>
                        <GoToHomeButton onClick={BackToHome}>Back to Home</GoToHomeButton>
                    </CheckoutResultInfos>
                </CheckoutResultsWrapper>
            <Footer />
        </Container>
    );
}

export default observer(CheckoutResult);