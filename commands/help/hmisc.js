const Discord = require('discord.js')
module.exports = {
    name: 'hmisc',
    aliases: ['h-misc', 'helpmisc'],
    description: 'displays a list of commands about miscs',
    run: (message)=>{
        const embedHelpMisc = new Discord.MessageEmbed()
            .setTitle('Misc')
            .addField('Users', '`>nick [@user] [nick]`\n-changes the nickname of a user.\n\n`>profile [@user]`\n-displays info about user.\n\n`>avatar [@user]`\n-gets the avatar of a user.')
            .setColor(0xA22EF0)
        message.channel.send(embedHelpMisc)
    }
}