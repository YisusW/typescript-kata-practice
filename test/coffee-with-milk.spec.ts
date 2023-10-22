import { CoffeeWithMilk } from "../src/beverage/coffee-with-milk";

describe("Coffee with milk cases", () => {
	it("price should be 1.30", () => {
		const coffeeWithMilk = new CoffeeWithMilk();

		const result = coffeeWithMilk.price();

		expect(result).toBeCloseTo(1.3, 0.001);
	});
});
