import { TeaWithMilk } from "../src/beverage/tea/tea-with-milk";

describe("Tea with milk cases", () => {
	it("price should be 1.60", () => {
		const teaWithMilk = new TeaWithMilk();

		const result = teaWithMilk.price();

		expect(result).toBeCloseTo(1.6, 0.001);
	});
});
