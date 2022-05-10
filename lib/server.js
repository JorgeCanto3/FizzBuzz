const ExplorerController = require ("./controller/ExplorerController.js")
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
    response.json({message: "Que pedo mami!!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get('/v1/explorers/:mission', (request,response)=>{
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission)

    response.json(explorerInMission)
})