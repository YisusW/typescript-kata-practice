import { Coffee } from "./coffee";

export class CoffeeWithMilk extends Coffee {
    price(): number {
        return super.price() + 0.10;
    }
}