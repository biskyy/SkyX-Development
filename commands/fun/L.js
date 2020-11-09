const Discord = require('discord.js')
module.exports = {
    name: 'l',
    aliases: ['L'],
    description: 'nothing',
    run: (message)=>{
        let targetUser = message.mentions.users.first()
        if(!targetUser){
            message.channel.send('TAKE THE L !1!!1 B0Y')
        }else{
        message.channel.send(`${targetUser} TAKE THE L !1!!1 B0Y`)
        }
    }
}