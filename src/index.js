const telegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

bot.on('message', async (message) => {
    // let admin_id = 615570939;
    // sticker id = CAACAgIAAxkBAAN5Y2qGcvh1ZnaHNrL8uL8bskrGmbIAAooBAAIrXlMLG0NsywABPrREKwQ

    let admin_id = 396961963; //Yurii Fostiak ID
    let user_id = message.from.id;
    let user = message.from.first_name + ' ' + message.from.last_name;
    let user_message = message.text;



    // if (user_message == '/start'){
    //     await bot.sendMessage(user_id, `Привіт, ${user}! \nЯкщо в тебе вимкнули світло і ти не маєш змоги працювати певний час, то вкажи це тут.`)
    //     await bot.sendMessage(user_id, 'Скільки часу тобі необхідно, щоб повернутись до роботи? \nВкажи проміжок часу (за Києвом), коли ти не активний(-a):', {
    //         reply_markup: {
    //             keyboard: [
    //                 [{text: '10 - 11'}], 
    //                 [{text: '11 - 12'}], 
    //                 [{text: '12 - 13'}], 
    //                 [{text: '14 - 15'}], 
    //                 [{text: '15 - 16'}], 
    //                 [{text: '17 - 18'}], 
    //                 [{text: '18 - 19'}]
    //             ]
    //         }
    //     })
    //     // await bot.sendMessage(user_id, reply_markup.keyboard[0])
    // } else if(user_message != '/start'){
    //     // console.log(message);
    //     await bot.sendMessage(user_id, 'Повідомлення надіслано!');
    //     await bot.sendSticker(user_id, 'CAACAgIAAxkBAAN5Y2qGcvh1ZnaHNrL8uL8bskrGmbIAAooBAAIrXlMLG0NsywABPrREKwQ')
    //     await bot.sendMessage(admin_id, `${user} буде відсутній у проміжку ${user_message}, за Київським часом. \nВідміть його в спредшиті`)
    // }
    
    if (user_message == '/stop')
        await bot.sendMessage(user_id, 'U r trying to stop bot')
    
})


// Find sticker id
// bot.on('sticker', function (msg) {
//       console.log(msg.sticker.file_id)
// });