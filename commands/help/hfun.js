const Discord = require('discord.js')
module.exports = {
    name: 'hfun',
    aliases: ['h-fun', 'helpfun'],
    description: 'Help about fun commands.',
    run: (message)=>{
        const embedHelpFun = new Discord.MessageEmbed()
            .setTitle('Fun commands.')
            .addField('Randomness', '`>cf`\n-flips a coin.\n\n`>8ball [question]`\n-responds to your question.')
            .addField('Troll', '`>l [@user]`\n-L\n\n`>rev [@user]`\n-no u\n\n`>f [@user]`\n-press f to pay respects.')
            .setColor(0xA22EF0)
        message.channel.send(embedHelpFun)
    }
}