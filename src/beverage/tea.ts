import { Beverage } from "./beverage.interface";

export class Tea implements Beverage {
	public price(): number {
		return 1.5;
	}
}
