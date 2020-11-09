const Discord = require('discord.js')
module.exports = {
    name: 'invite',
    description: 'gives you a link to invite the bot to your server.',
    run: (message) => {
        message.channel.send('Here is a link to invite me to your server.\nhttps://discord.com/api/oauth2/authorize?client_id=771694471968063539&permissions=8&scope=bot')
    }
}