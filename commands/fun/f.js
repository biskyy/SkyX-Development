const Discord = require('discord.js')
module.exports = {
    name: 'f',
    description: 'press f to pay respects',
    run: (message)=>{
        let targetUser = message.mentions.users.first()
        message.channel.send(`${targetUser} f brutha`)
    }
}