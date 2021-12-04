import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageChange } from "../../components/PageChange";
import { ShopItems } from "../../components/ShopItems";
import { Container } from "./styles";
import axios from "axios";
import { VehiclesDataInterface } from "../../models/Vehicle";
import { useState, useEffect } from "react";

export const Home = () => {
    let [vehiclesData, setVehiclesData] = useState<VehiclesDataInterface>({} as any);
    
    async function handlePageChangeClick(type: 'previous' | 'next'){
        let url: string | null = '';

        (type === 'previous') ? url = vehiclesData.previous : url = vehiclesData.next;

        if (!url) 
            return;

        try{
            GetVehiclesData(url);
            console.log(vehiclesData);
        } catch (error) {
            console.log(error);
        }
    }

    async function GetVehiclesData(url: string){
        try{
            setVehiclesData((await axios.get(url)).data); 
            window.scrollTo(0, 0);
            console.log(vehiclesData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetVehiclesData('https://swapi.dev/api/vehicles/');
        console.log("entrou no useeffect");
    }, []);
    

    return(
        <Container>
            <Header />
            {vehiclesData != null && <ShopItems vehiclesData={vehiclesData.results} />}
            <PageChange previousUrl={vehiclesData.previous} nextUrl={vehiclesData.next} handlePageChangeClick={handlePageChangeClick} />
            <Footer />
        </Container>
    );   
}