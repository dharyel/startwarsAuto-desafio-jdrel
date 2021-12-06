import { VehicleInterface } from '../../models/Vehicle';
import {useNavigate} from "react-router-dom";

import {observer} from 'mobx-react-lite';
import VehicleStore from "../../stores/VehicleStore"; 
import {useContext} from 'react';

import { 
    Container, 
    MainInfo,
    Name,
    Model,
    Manufacturer,
    ItemImg,
    Details,
    DetailWrapper,
    DetailName,
    DetailValue,
    BuyButton
} from './styles';

import vehicleImg from '../../assets/images/vehicles/VV_LansSpeeder.png';


const ShopItem = (item: VehicleInterface) => {
    const navigate = useNavigate();
    const vehiclesStore = useContext(VehicleStore);
    const {SetSelectedVehicle} = vehiclesStore;


    function handleBuyButtonClick(){
        //salvar os dados do item (VehicleInterface)
        SetSelectedVehicle(item);
        console.log("comprou");
        //redirecionar para a página checkout
        window.scrollTo(0, 0);
        navigate('/checkout')
    }

    return (
        <Container onClick={handleBuyButtonClick}>
            <MainInfo>
				<Name>{item.name}</Name>
				<Model>{item.model}</Model>
				<Manufacturer>{item.manufacturer}</Manufacturer>
			</MainInfo>

			<ItemImg src={vehicleImg} />

			<Details>
				<DetailWrapper>
                    <DetailName>Max. Atm. Speed:</DetailName>
                    <DetailValue>{item.max_atmosphering_speed}</DetailValue>
                </DetailWrapper>

                <DetailWrapper>
                    <DetailName>Length:</DetailName>
                    <DetailValue>{item.length}</DetailValue>
                </DetailWrapper>

                <DetailWrapper> 
                    <DetailName>Crew:</DetailName>
                    <DetailValue>{item.crew}</DetailValue>
                </DetailWrapper>

                <DetailWrapper>
                    <DetailName>Passengers:</DetailName>
                    <DetailValue>{item.passengers}</DetailValue>
                </DetailWrapper>

                <DetailWrapper>
                    <DetailName>Cargo Capacity:</DetailName>
                    <DetailValue>{item.cargo_capacity}</DetailValue>
                </DetailWrapper>

                <DetailWrapper>
                    <DetailName>Consumables:</DetailName>
                    <DetailValue>{item.consumables}</DetailValue>
                </DetailWrapper>

                <DetailWrapper>
                    <DetailName>Vehicle Class:</DetailName>
                    <DetailValue>{item.vehicle_class}</DetailValue>
                </DetailWrapper>
			</Details>

			<BuyButton
                onClick={handleBuyButtonClick}
            >
                Buy Now for <span>$ {item.cost_in_credits}</span>
            </BuyButton>
        </Container>
    );
}

export default observer(ShopItem);