import { TeaWithMilk } from "../src/beverage/tea-with-milk";

describe("Tea with milk cases", () => {
	it("price should be 1.6", () => {
		const teaWithMilk = new TeaWithMilk();
		expect(teaWithMilk.price()).toBeCloseTo(1.6, 0.001);
	});
});
