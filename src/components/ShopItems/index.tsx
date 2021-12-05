import { VehicleInterface } from '../../models/Vehicle';
import ShopItem from '../ShopItem';
import { Container } from './styles';

interface ShopItemsProps{
    vehiclesData: VehicleInterface[];
}
export const ShopItems = ({vehiclesData}: ShopItemsProps) => {

    /*
    const vehicle = {
        name: "Sith speeder",
        model: "FC-20 speeder bike",
        manufacturer: "Razalon",
        cost_in_credits: "4000",
        length: "1.5",
        max_atmosphering_speed: "180",
        crew: "1",
        passengers: "0",
        cargo_capacity: "2",
        consumables: "unknown",
        vehicle_class: "speeder",
        pilots: [
            "https://swapi.dev/api/people/44/"
        ],
        films: [
            "https://swapi.dev/api/films/4/"
        ],
        created: "2014-12-20T10:09:56.095000Z",
        edited: "2014-12-20T21:30:21.712000Z",
        url: "https://swapi.dev/api/vehicles/42/"
    }
    */

    return (
        <Container>
            {vehiclesData && 
                vehiclesData.map((item, index) => {
                    return(
                        <ShopItem key={index} {...item} />
                    );
                })
            }
        
        </Container>
    );
}