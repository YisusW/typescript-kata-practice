import { HotChocolate } from "./hot-chocolate";

export class HotChocolateWithMilk extends HotChocolate {
	price(): number {
		return super.price() + 0.15;
	}
}
