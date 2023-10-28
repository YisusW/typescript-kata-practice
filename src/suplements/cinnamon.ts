import { Suplement } from "./suplement.interface";

export class Cinnamon implements Suplement {
	private readonly PRICE = 0.05;

	getPrice(): number {
		return this.PRICE;
	}
}
