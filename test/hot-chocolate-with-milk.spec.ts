import { HotChocolateWithMilk } from "../src/beverage/chocolate/hot-chocolate-with-milk";

describe("Hot Chocolate with milk cases", () => {
	it("price should be 1.60", () => {
		const hotChocolateWithCream = new HotChocolateWithMilk();

		const result = hotChocolateWithCream.price();

		expect(result).toBeCloseTo(1.6, 0.001);
	});
});
