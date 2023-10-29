import { SuplementContainer } from "../suplements/suplement-container";
import { Beverage } from "./beverage.interface";

export class HotChocolate implements Beverage {
	constructor(public suplement: SuplementContainer) {}

	price(): number {
		return 1.45 + this.suplement.getPrice();
	}
}
