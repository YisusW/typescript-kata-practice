import { HotChocolate } from "../src/beverage/chocolate/hot-chocolate";

describe("Hot Chocolate cases", () => {
	it("price should be 1.45", () => {
		const hotChocolate = new HotChocolate();

		const result = hotChocolate.price();

		expect(result).toBeCloseTo(1.45, 0.001);
	});
});
