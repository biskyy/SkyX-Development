const Discord = require('discord.js')
module.exports = {
    name: 'your',
    description: 'something',
    run: (message, args)=>{
        if(args[0] == 'family'){
            const embedYourFamily = new Discord.MessageEmbed()
                .setAuthor('your family')
                .setTitle('and your family')
                .setDescription('and your family')
                .addField('and your family', 'and your family')
                .setFooter('and your family')
                .setColor('RANDOM')
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
            message.channel.send(embedYourFamily)
        }else{
            return;
        }
    }
}