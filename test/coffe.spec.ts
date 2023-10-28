import { Coffee } from "../src/beverage/coffee";
import { Cream, Milk, SuplementContainer } from "../src/suplements";

describe("Coffee - price", () => {
	/**
	 * coffee create with zero suplements to just get the price of coffe without suplements
	 */
	const coffee = new Coffee(new SuplementContainer([]));

	it("price should be 1.20", () => {
		const result = coffee.price();

		expect(result).toBeCloseTo(1.2, 5);
	});

	describe("Suplements - composition with milk", () => {
		const coffeeWithMilk = () => {
			const milkSuplement = new SuplementContainer([new Milk()]);

			return new Coffee(milkSuplement);
		};

		it("price should be 1.3", () => {
			const coffee = coffeeWithMilk();

			const result = coffee.price();

			expect(result).toBeCloseTo(1.3, 5);
		});
	});

	describe("Suplements - composition with cream", () => {
		const coffeeWithCream = () => {
			const creamSuplement = new SuplementContainer([new Cream()]);

			return new Coffee(creamSuplement);
		};

		it("price should be 1.35", () => {
			const coffee = coffeeWithCream();

			const result = coffee.price();

			expect(result).toBeCloseTo(1.35, 5);
		});
	});

	describe("Suplements - composition with cream and milk", () => {
		const coffeeWithMilkAndCream = () => {
			const suplements = [new Cream(), new Milk()];

			return new Coffee(new SuplementContainer(suplements));
		};

		it("price should be 1.45", () => {
			const coffee = coffeeWithMilkAndCream();

			const result = coffee.price();

			expect(result).toBeCloseTo(1.45, 5);
		});
	});
});
