import { HotChocolate } from "../src/beverage/hot-chocolate";

describe("Hot Chocolate cases", () => {
	it("price should be ", () => {
		const hotChocolate = new HotChocolate();

		const result = hotChocolate.price();

		expect(result).toBeCloseTo(1.45, 0.001);
	});
});
