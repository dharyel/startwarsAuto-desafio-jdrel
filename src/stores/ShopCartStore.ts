import { VehicleInterface } from '../models/Vehicle';
import {createContext} from 'react';
import {makeObservable, observable, action, computed} from 'mobx';
import { CreditCardInterface } from '../models/Payment';

class ShopCartStore {
    boughtItem: VehicleInterface | null = null;
    purchaseSucced: boolean = false;
    creditCardInfo: CreditCardInterface | null = null;

    constructor(){
        makeObservable(this, {
            boughtItem: observable,
            purchaseSucced: observable,
            SetBoughtItem: action,
            info: computed
        })
    }

    SetBoughtItem = (vehicle: VehicleInterface, purchaseSucced: boolean, creditCardInfo: CreditCardInterface | null = null) => {
        if (!vehicle)
            return;

        if (creditCardInfo)
            this.creditCardInfo = creditCardInfo;
            
        this.boughtItem = vehicle;
        this.purchaseSucced = purchaseSucced;
    }

    get info() {
        //computed vem por último, depois que toda vez que uma variável observável é modificada
        return console.log(this.boughtItem);
    }
}

export default createContext(new ShopCartStore());