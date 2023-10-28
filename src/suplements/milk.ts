import { Suplement } from "./suplement.interface";

export class Milk implements Suplement {
	private readonly PRICE = 0.1;

	getPrice(): number {
		return this.PRICE;
	}
}
