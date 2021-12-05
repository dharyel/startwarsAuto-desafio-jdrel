import {observer} from 'mobx-react-lite';
import VehicleStore from "../../stores/VehicleStore"; 
import {useContext} from 'react';

const Checkout = () => {
    const vehiclesStore = useContext(VehicleStore);
    const {selectedVehicle} = vehiclesStore;

    return(
        <h1>{selectedVehicle && selectedVehicle.name}</h1>
    );
}

export default observer(Checkout);