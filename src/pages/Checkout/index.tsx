import {observer} from 'mobx-react-lite';
import VehicleStore from "../../stores/VehicleStore"; 
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    CheckoutWrapper, 
    Container, 
    DivistorLine, 
    ResumeWrapper, 
    UserPaymentWrapper 
} from './styles';

const Checkout = () => {
    const vehiclesStore = useContext(VehicleStore);
    const {selectedVehicle} = vehiclesStore;
    const navigate = useNavigate();

    const handleFinishCheckout = () => {
        if (!selectedVehicle)
            return;

        console.log(`Você acabou de comprar: ${selectedVehicle.name}`, selectedVehicle);
    }

    const handleCancelCheckout = () => {
        if (!selectedVehicle)
            return;

        console.log(`Você acabou de cancelar a compra de: ${selectedVehicle.name}`, selectedVehicle);

        window.scrollTo(0, 0);
        navigate('/');
    }

    return(
        <Container>

            <h1>CHECKOUT</h1>
            
            <CheckoutWrapper>
                <UserPaymentWrapper>

                </UserPaymentWrapper>
                
                <DivistorLine />
                
                <ResumeWrapper>
                    <h2>RESUME</h2>

                    <hr />

                    <h4>Product name: {selectedVehicle && selectedVehicle.name}</h4>
                    <h4>Product price: $ {selectedVehicle && selectedVehicle.cost_in_credits}</h4>
                    
                    <hr />

                    <h3>TOTAL: $ <span>{selectedVehicle && selectedVehicle.cost_in_credits}</span></h3>

                    <button id="finishCheckoutButton" onClick={handleFinishCheckout}>BUY</button>
                    <button id="cancelCheckoutButton" onClick={handleCancelCheckout}>CANCEL</button>
                </ResumeWrapper>
            </CheckoutWrapper>

        </Container>
    );
}

export default observer(Checkout);