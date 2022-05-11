const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controller/ExplorerController");


//Replacing the token that BotFather gave us 
const token = "5331487653:AAHzeRfqrln1qouxerrNaTh6Gkawj94wtGQ";

//Creating a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

//Matches "/echo 'somecode' "
bot.onText(/\/echo (.+)/, (msg, match) => {
    /*'msg' is  receivede message from telegram
     'match' is the result of executing the 
     regexp above the text content of the message*/

    const chatId = msg.chat.id;
    const resp = match[1]; //'somecode is received'

    //We send back the message to 'somecode' to the chat
    bot.sendMessage(chatId, resp);
});

/*bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick = ExplorerController.fizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`; bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
*/
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const mission = msg.text;

    if ((mission == "node" )) {
        const ExplorersMission = ExplorerController.getExplorersByMission(mission);
        console.log(ExplorersMission);
        ExplorersMission.map((students) => {
            bot.sendMessage(chatId, students.githubUsername);
            console.log(students);
        });

    } else {
        bot.sendMessage("Envia una mision valida");
    }

    if ((mission == "java")) {
        const ExplorersMission = ExplorerController.getExplorersByMission(mission);
        console.log(ExplorersMission);
        ExplorersMission.map((students) => {
            bot.sendMessage(chatId, students.githubUsername);
            console.log(students);
        });

    } else {
        bot.sendMessage("Envia una mision valida");
    }
    
    
    
});