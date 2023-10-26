import { Suplement } from "./suplement.interface";

export class Cream implements Suplement {
	private readonly PRICE = 0.15;

	getPrice(): number {
		return this.PRICE;
	}
}
