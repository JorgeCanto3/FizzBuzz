const ExplorerServices = require("./../../lib/Services/ExplorerServices")

describe("Test for ExplorerServices", () => {
    test("Requerimietno 1: Calcular la cantidad de explorers en las mission de node", () => {
        const explorers = [{ mission: "node" }]
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(1)

    })

})

