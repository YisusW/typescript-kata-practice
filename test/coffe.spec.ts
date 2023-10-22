import { Coffee } from "../src/beverage/coffee";

describe("Coffee - price", () => {
	it("price should be 1.20", () => {
		const coffee = new Coffee();
		expect(coffee.price()).toBeCloseTo(1.20, 0.001);
	});
});
