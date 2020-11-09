const Discord = require('discord.js')
module.exports = {
    name: 'embed',
    expectedArgs: '<-title>, <-description>, <-field1 title>, <-field1 description>, <-0x[hexcolor]>',
    description: 'creates a embed',
    run: (message, prefix) => {
        const args = message.content.trim().split('-');
        let embedTitle = args[1]
        let embedDesc = args[2]
        let embedFieldTitle = args[3]
        let embedFieldDesc = args[4]
        let embedColor = args[5]

        const embedBuilder = new Discord.MessageEmbed()
            .setTitle(`${embedTitle}`)
            .setDescription(`${embedDesc}`)
            .addField(`${embedFieldTitle}`, `${embedFieldDesc}`)
            .setColor(`${embedColor}`)
        message.channel.send(embedBuilder)
    }
}