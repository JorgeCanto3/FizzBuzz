const ExplorerServices = require("./../../lib/Services/ExplorerServices");
const Reader = require("../../lib/utils/Reader");

describe("Test for ExplorerServices", () => {
    test("Requerimietno 1: Calcular la cantidad de explorers en las mission de node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(ExplorerServices.filterByMission(explorers, "node").length).toBe(10);
        expect(ExplorerServices.getAmountOfExplorersByMission(explorers, "node")).toBe(10);
        expect(ExplorerServices.getExplorersUsernamesByMission(explorers, "node").length).toBe(10);

    });

});





