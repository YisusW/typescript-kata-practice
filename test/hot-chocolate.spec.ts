import { HotChocolate } from "../src/beverage";
import { Cinnamon, Cream, Milk, SuplementContainer } from "../src/suplements";

describe("Hot Chocolate cases", () => {
	/**
	 * hotChocolate created with zero suplements to just get the price of coffe without suplements
	 */
	const hotChocolate = new HotChocolate(new SuplementContainer([]));

	it("price should be 1.45", () => {
		const result = hotChocolate.price();

		expect(result).toBeCloseTo(1.45, 5);
	});

	describe("Suplements - composition with milk", () => {
		const hotChocolateWithMilk = () => {
			const suplements = new SuplementContainer([new Milk()]);

			return new HotChocolate(suplements);
		};

		it("price should be 1.55", () => {
			const hotChocolate = hotChocolateWithMilk();

			const result = hotChocolate.price();

			expect(result).toBeCloseTo(1.55, 5);
		});
	});

	describe("Suplements - composition with cream", () => {
		const hotChocolateWithCream = () => {
			const suplements = new SuplementContainer([new Cream()]);

			return new HotChocolate(suplements);
		};

		it("price should be 1.60", () => {
			const hotChocolate = hotChocolateWithCream();

			const result = hotChocolate.price();

			expect(result).toBeCloseTo(1.6, 5);
		});
	});

	describe("Suplements - composition with cinnamon", () => {
		const hotChocolateWithCinnamon = () => {
			const suplements = new SuplementContainer([new Cinnamon()]);

			return new HotChocolate(suplements);
		};

		it("price should be 1.50", () => {
			const hotChocolate = hotChocolateWithCinnamon();

			const result = hotChocolate.price();

			expect(result).toBeCloseTo(1.50, 5);
		});
	});

	describe("Suplements - composition with cream and milk", () => {
		const hotChocolateWithCreamAndMilk = () => {
			const suplements = new SuplementContainer([new Cream(), new Milk()]);

			return new HotChocolate(suplements);
		};

		it("price should be 1.70", () => {
			const hotChocolate = hotChocolateWithCreamAndMilk();

			const result = hotChocolate.price();

			expect(result).toBeCloseTo(1.7, 5);
		});
	});
});
