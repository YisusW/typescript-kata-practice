import { Beverage, Tea } from "../src/beverage";
import { Milk, SuplementContainer } from "../src/suplements";

describe("Tea cases", () => {
	/**
	 * tea create with zero suplements to just get the price of coffe without suplements
	 */
	const tea = new Tea(new SuplementContainer([]));

	it("price should 1.50", () => {
		const result = tea.price();

		expect(result).toBeCloseTo(1.5, 5);
	});

	describe("Suplements - composition with milk", () => {
		const teaWithMilk = (): Beverage => {
			const milkSuplement = new SuplementContainer([new Milk()]);

			return new Tea(milkSuplement);
		};

		it("price should be 1.60", () => {
			const tea = teaWithMilk();

			const result = tea.price();

			expect(result).toBeCloseTo(1.6, 5);
		});
	});
});
