const Discord = require('discord.js')
module.exports = {
    name: 'hmod',
    aliases: ['h-mod', 'helpmod'],
    description: 'Help about mod commands.',
    run: (message)=>{
        const embedHelpMod = new Discord.MessageEmbed()
            .setAuthor('SkyX Moderation Commands')
            .setTitle('Moderation')
            .addField('Messages', '`>clear [amount]`\n-deletes the specified amount of messages')
            .addField('Roles', '`>role [@target-user] [role-name]`\n- gives that specified user a role -> requires **Manage Roles** permission.\n\n`>delrole [@target-user] [role-name]`\n- removes a role from the specified user -> requires **Manage Role** permission.\n\n`>hasrole [@target-user] [role-name]`\n- verify\'s either a user has a role or not -> doesn\'t require any permissions.')
            .setColor(0xA22EF0)
        message.channel.send(embedHelpMod)
    }
}