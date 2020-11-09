const Discord = require('discord.js')
module.exports = {
    name: 'nick',
    aliases: ['setnick', 'setnickname', 'nickname'],
    description: 'changes the nickname',
    run: (message, args) => {
        const target = message.mentions.users.first()
        if(!target){
            message.channel.send('Please specify a user!')
            return;
        }
        const member = message.guild.members.cache.get(target.id)

        args.shift()
        const nickname = args.join(' ')

        member.setNickname(nickname)

        message.channel.send(`I successfully changed ${target}'s nickname!`)
    }
}