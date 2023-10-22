import { Coffee } from "../src/beverage/coffee";

describe("Coffee - price", () => {
	it("price should be 1.20", () => {
		const coffee = new Coffee();

		const result = coffee.price();

		expect(result).toBeCloseTo(1.2, 0.001);
	});
});
