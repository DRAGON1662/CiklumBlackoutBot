const telegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

bot.on('message', (message) => {
    let user_id = message.from.id;
    let user = message.from.first_name + ' ' + message.from.last_name;
    let user_message = message.text;

    
    if (user_message == '/stop')
        bot.sendMessage(user_id, 'U r trying to stop bot')
    else
        bot.sendMessage(user_id, `Hello, ${user}, from bot!`)
})
