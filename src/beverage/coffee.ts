import { SuplementContainer } from "../suplements/suplement-container";
import { Beverage } from "./beverage.interface";

export class Coffee implements Beverage {
	constructor(public suplement: SuplementContainer) {}

	price(): number {
		return 1.2 + this.suplement.getPrice();
	}
}
