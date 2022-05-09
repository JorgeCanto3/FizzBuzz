const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");

class ExplorerServices { 
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        const getAmountOfExplorersByMission = explorersInNode.length    
        return getAmountOfExplorersByMission
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const getExplorersUsernamesByMission = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return getExplorersUsernamesByMission
    }

}   
    
ExplorerServices.filterByMission(explorers, "node")
ExplorerServices.getAmountOfExplorersByMission(explorers, "node");
ExplorerServices.getExplorersUsernamesByMission(explorers, "node");


console.log(ExplorerServices.filterByMission(explorers, "node"))
console.log("Son",ExplorerServices.getAmountOfExplorersByMission(explorers, "node"), "Explorers en las mision de Node.Js")
console.log(ExplorerServices.getExplorersUsernamesByMission(explorers, "node"))
module.exports = ExplorerServices
