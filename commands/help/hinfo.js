const Discord = require('discord.js')
module.exports = {
    name: 'hinfo',
    aliases: ['h-info', 'helpinfo'],
    description: 'Help about info commands.',
    run: (message)=>{
        const embedHelpInfo = new Discord.MessageEmbed()
            .setTitle('Info')
            .addField('Help', '`>help`\n- displays a list of commands.')
            .addField('Coding', '`>docs [search term]`\n- searchs the Discord.js.')
            .setColor(0xA22EF0);
        message.channel.send(embedHelpInfo);
    }
}