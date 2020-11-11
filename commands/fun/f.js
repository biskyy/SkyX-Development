const Discord = require('discord.js')
module.exports = {
    name: 'f',
    description: 'press f to pay respects',
    run: (message)=>{
        let targetUser = message.mentions.users.first()
        if(!targetUser){
            message.channel.send('f')
        }else{
        message.channel.send(`${targetUser} f brutha`)
        }
    }
}