const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");

class FizzBuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorers.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorers.score % 3 === 0) {
            explorers.trick = "FIZZ";
            return explorer;
        } else if (explorers.score % 5 === 0) {
            explorers.trick = "BUZZ";
            return explorers;
        } else {
            explorers.trick = explorers.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FIZZBUZZ";
        } else if (number % 3 === 0) {
            return "FIZZ";
        } else if (number % 5 === 0) {
            return "BUZZ";
        } else {
            return number;
        }
    }
}
 
console.log(FizzBuzzService.applyValidationInExplorer());

module.exports = FizzBuzzService;