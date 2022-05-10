const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");

class ExplorerServices { 
       static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission).length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersUsernames = this.filterByMission(explorers, mission);
        return explorersUsernames.map((explorer) => explorer.githubUsername);
    }
}
  
ExplorerServices.filterByMission(explorers, "node");
ExplorerServices.getAmountOfExplorersByMission(explorers, "node");
ExplorerServices.getExplorersUsernamesByMission(explorers, "node");

module.exports = ExplorerServices;

