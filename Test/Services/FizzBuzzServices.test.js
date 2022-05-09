const FizzBuzzServices = require("./../../lib/Services/FizzBuzzService");
const explorers = [
    { name: "Explorer1", score: 1, trick: 1 },
    { name: "Explorer3", score: 3, trick: "FIZZ" },
    { name: "Explorer5", score: 5, trick: "BUZZ" },
    { name: "Explorer15", score: 15, trick: "FIZZBUZZ" }
];

describe("Test for FizzBuzzServices", () => {
    test("Requerimietno 1: Validacion de exlprer", () => {
        const Explorer1 = FizzBuzzServices.applyValidationInExplorer(explorers[0]);
        expect(Explorer1.trick).toBe(1);

        const Explorer2 = FizzBuzzServices.applyValidationInExplorer(explorers[1]);
        expect(Explorer2.trick).toBe("FIZZ");

        const Explorer3 = FizzBuzzServices.applyValidationInExplorer(explorers[2]);
        expect(Explorer3.trick).toBe("BUZZ");

        const Explorer4 = FizzBuzzServices.applyValidationInExplorer(explorers[3]);
        expect(Explorer4.trick).toBe("FIZZBUZZ");
    });

});