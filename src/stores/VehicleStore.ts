import { VehicleInterface, VehiclesDataInterface} from '../models/Vehicle';
import {createContext} from 'react';
import {makeObservable, observable, action, computed} from 'mobx';
import axios from 'axios';

class VehiclesDataStore {
    vehiclesData: VehiclesDataInterface = {} as VehiclesDataInterface;
    selectedVehicle: VehicleInterface | null = null;

    constructor(){
        makeObservable(this, {
            vehiclesData: observable,
            selectedVehicle: observable,
            GetVehiclesData: action,
            info: computed
        })

        this.GetVehiclesData('https://swapi.dev/api/vehicles/');
    }

    GetVehiclesData = async (url: string) => {
        try{
            this.vehiclesData =(await axios.get(url)).data; 
            window.scrollTo(0, 0);
            console.log(this.vehiclesData);
        } catch (error) {
            console.log(error);
        }
    }

    SetSelectedVehicle = (vehicle: VehicleInterface) => {
        if (!vehicle)
            return;

        this.selectedVehicle = vehicle;
    }

    get info() {
        //computed vem por último, depois que toda vez que uma variável observável é modificada
        return console.log("atualizou ", this.vehiclesData);
    }
}

export default createContext(new VehiclesDataStore());