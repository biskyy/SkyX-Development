const Discord = require('discord.js')
module.exports = {
    name: 'no',
    aliases: ['no-u', 'reverse'],
    description: 'no u',
    run: (message, args)=>{
        if(args[0] == 'u'){
        let targetUser = message.mentions.users.first()
        if(!targetUser){
            message.channel.send('Please specify a user.')
            return;
        }else{
        const embedNoU = new Discord.MessageEmbed()
            .setTitle(`${targetUser.username} no u1!!`)
            .attachFiles('./images/nou.jpg')
            .setImage('attachment://nou.jpg')
            .setColor(0xA22EF0)
        message.channel.send(embedNoU)
        }
    }else{
        return;
    }
    }
}