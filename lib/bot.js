const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controller/ExplorerController");


//Replacing the token that BotFather gave us 
const token = "";   

//Creating a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

//Matches "/echo 'somecode' "
bot.onText(/\/echo (.+)/, (msg, match) => {
    /*'msg' is  receivede message from telegram
     'match' is the result of executing the 
     regexp above the text content of the message*/
    
    const chatId = msg.chat.id
    const resp = match[1]; //'somecode is received'

    //We send back the message to 'somecode' to the chat
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    
    if (!isNaN(numberToApplyFb)) {
        const FizzBuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${FizzBuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else { 
        bot.sendMessage(chatId, "Envia un nùmero vàlido")
    }
});