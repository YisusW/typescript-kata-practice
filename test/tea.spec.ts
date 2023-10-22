import { Tea } from "../src/beverage/tea";

describe("Tea cases", () => {
	it("price should 1.50", () => {
		const tea = new Tea();
		expect(tea.price()).toBeCloseTo(1.5, 0.001);
	});
});
