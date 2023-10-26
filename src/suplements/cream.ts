import { Suplement } from "./suplement.interface";

export class Cream implements Suplement {
    private PRICE = 0.15;

    getPrice(): number {
        return this.PRICE;
    }
}
