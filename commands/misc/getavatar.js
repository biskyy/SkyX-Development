const Discord = require('discord.js')
module.exports = {
    name: 'getavatar',
    aliases: ['avatar'],
    description: 'gets a user avatar',
    run: (message, args)=>{
        let embedAvatar = new Discord.MessageEmbed()
        if(!message.mentions.users.first()){
            embedAvatar.setTitle(`Your avatar`)
            embedAvatar.setThumbnail(message.author.displayAvatarURL())
            embedAvatar.setColor(0xA22EF0)
            embedAvatar.setFooter('>p for more user info\n>help for more commands!')
            return message.channel.send(embedAvatar)
        }else{
            let user = message.mentions.users.first()
            embedAvatar.setTitle(`${user.tag}'s avatar`)
            embedAvatar.setThumbnail(user.displayAvatarURL())
            embedAvatar.setColor(0xA22EF0)
            embedAvatar.setFooter('>p for more user info\n>help for more commands!')
            return message.channel.send(embedAvatar)
        }
    }
}