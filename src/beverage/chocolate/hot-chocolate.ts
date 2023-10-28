import { Beverage } from "../beverage.interface";

export class HotChocolate implements Beverage {
	price(): number {
		return 1.45;
	}
}
