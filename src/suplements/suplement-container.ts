import { Suplement } from "./suplement.interface";


export class SuplementContainer {
    constructor(private suplements: Suplement[]) {}

    getPrice(): number {

        let price = 0;

        this.suplements.forEach((suplement) => {
            price +=  suplement.getPrice();
        });

        return price;
    }
}