import { Suplement } from "./suplement.interface";

export class Cinnamon implements Suplement {
    private PRICE = 0.05;

    getPrice(): number {
        return this.PRICE;
    }
}
