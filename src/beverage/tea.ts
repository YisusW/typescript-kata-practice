import { SuplementContainer } from "../suplements/suplement-container";
import { Beverage } from "./beverage.interface";

export class Tea implements Beverage {
	constructor(public suplement: SuplementContainer) {}

	public price(): number {
		return 1.5 + this.suplement.getPrice();
	}
}
