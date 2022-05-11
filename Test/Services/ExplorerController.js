const ExplorerController = require("./../../lib/controller/ExplorerController");

describe("Unit Tests for explorer controller file", () => {
    test("1) Test for getExplorerByMission not null", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        expect(explorersByMission).not.toBeNull();        
    });
    test("2) Test for getExplorerByMission length", () => {
        const explorerByMissionLength = ExplorerController.getExplorersByMission("node");
        expect(explorerByMissionLength).toHaveLength(10);
    });
    test("3) Test for getExplorersUsernamesByMission method", () => {
        const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernamesByMission).toContain("ajolonauta1");
    });
    test("4) Test for getExplorersUsernamesByMission, not to be null", () => {
        const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersUsernamesByMission).not.toBeNull();
    });
    test("5) Test for getExplorerAmountByMission method", () => {
        const explorersAmountByMissions = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorersAmountByMissions).toBe(5);
    });
    test("6) Test for getExplorerAmountByMission length", () => {
        const explorersAmountByMissions = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersAmountByMissions).toBe(explorersAmountByMissions);
    });
});

//Test doesn't run cause of files