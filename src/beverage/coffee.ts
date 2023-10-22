import { Beverage } from "./beverage.interface";

export class Coffee implements Beverage {
	price(): number {
		return 1.2;
	}
}
