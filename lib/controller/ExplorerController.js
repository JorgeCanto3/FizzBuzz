const ExplorerService = require ("./../Services/ExplorerServices.js")
const FizzBuzzService = require ("./../Services/FizzBuzzService.js")
const Reader = require ("./../utils/Reader.js")

const explores = Reader.readJsonFile("./explorers.json")

class ExplorerController {

    static getExplorersByMission (mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const ExplorersByMission = ExplorerService.filterByMission(explorers,mision)
        return ExplorersByMission;
    }


    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const ExplorersByMission = ExplorerService.filterByMission(explorers,mision)
        return ExplorerService.filterByMission(explorers,mision)
    }


    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const ExplorersAmountByMission = ExplorerService(explorers.mision)
        return ExplorerService.filterByMission(explorers.mision)
    }

}
module.exports = ExplorerController