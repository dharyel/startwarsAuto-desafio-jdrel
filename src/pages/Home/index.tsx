import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageChange } from "../../components/PageChange";
import { ShopItems } from "../../components/ShopItems";
import { Container } from "./styles";

import {observer} from 'mobx-react-lite';
import VehicleStore from "../../stores/VehicleStore"; 
import {useContext} from 'react';

const Home = () => {
    const vehiclesStore = useContext(VehicleStore);
    const {vehiclesData, GetVehiclesData} = vehiclesStore;

    async function handlePageChangeClick(type: 'previous' | 'next'){
        let url: string | null = '';

        (type === 'previous') ? url = vehiclesData.previous : url = vehiclesData.next;

        if (!url) 
            return;

        try{
            GetVehiclesData(url);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <Header />
            {vehiclesData != null && <ShopItems vehiclesData={vehiclesData.results} />}
            <PageChange previousUrl={vehiclesData.previous} nextUrl={vehiclesData.next} handlePageChangeClick={handlePageChangeClick} />
            <Footer />
        </Container>
    );   
}

export default observer(Home);