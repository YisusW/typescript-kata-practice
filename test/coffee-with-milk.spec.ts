import { CoffeeWithMilk } from "../src/beverage/coffee-with-milk";

describe("Coffee with milk cases", () => {
    it("price should be 1.30", () => {
        const coffeeWithMilk = new CoffeeWithMilk();
        expect(coffeeWithMilk.price()).toBeCloseTo(1.30, 0.001);
    });
});