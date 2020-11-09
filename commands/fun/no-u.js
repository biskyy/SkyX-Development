const Discord = require('discord.js')
module.exports = {
    name: 'rev',
    aliases: ['no-u', 'reverse'],
    description: 'no u',
    run: (message)=>{
        let targetUser = message.mentions.users.first()
        const embedNoU = new Discord.MessageEmbed()
            .setTitle(`${targetUser.username} no u1!!`)
            .attachFiles('./images/nou.jpg')
            .setImage('attachment://nou.jpg')
            .setColor(0xA22EF0)
        message.channel.send(embedNoU)
    }
}