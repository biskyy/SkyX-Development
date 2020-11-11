const Discord = require('discord.js')
module.exports = {
    name: 'github',
    aliases: ['git'],
    description: 'gives a source code of the bot',
    run: (message) => {
        message.channel.send('Here is my GitHub repository.\nhttps://github.com/iSky-bit/SkyX-Development')
    }
}