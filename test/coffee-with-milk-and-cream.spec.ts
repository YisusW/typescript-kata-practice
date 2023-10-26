import { CoffeeWithMilkAndCream } from "../src/beverage/coffee/coffee-with-milk-and-cream";

describe("Coffee with milk and cream cases", () => {
	it("price should be 1.45", () => {
		const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream();

		const result = coffeeWithMilkAndCream.price();

		expect(result).toBeCloseTo(1.45, 0.001);
	});
});
