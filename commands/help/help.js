const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'list of commands',
    run: (message)=>{
        const embedHelp = new Discord.MessageEmbed()
            .setAuthor('Help for SkyX Bot')
            
            .addFields(
                {
                    name: 'Moderation',
                    value: '`>hmod` - displays a list of commands with moderation commands.'
                },
                {
                    name: 'Fun',
                    value: '`>hfun` - displays a list of commands with fun commands.'
                },
                {
                    name: 'info',
                    value: '`>hinfo` - displays a list of commands with information commands.'
                },
                {
                    name: 'Others',
                    value: '`>invite` - provides a link to invite the bot to your server.'
                }
            )
            .setColor(0xA22EF0)
        message.channel.send(embedHelp)
    }
}