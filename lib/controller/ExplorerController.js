const ExplorerService = require("./../Services/ExplorerServices");
const FizzbuzzService = require("./../Services/FizzBuzzService");
const Reader = require("../utils/reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static applyFizzbuzz(score) {
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getexplorerStack(stack) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getexplorerStack(explorers, stack);
    }
}

module.exports = ExplorerController;