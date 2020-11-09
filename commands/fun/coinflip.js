const Discord = require('discord.js')
module.exports = {
    name: 'cf',
    aliases: ['th', 'coinflip'],
    description: 'classic coinflip',
    run: (message)=>{
        function doRandHT() {
            var rand = ['HEADS!','TAILS!'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
            const embedCf = new Discord.MessageEmbed()
                .setTitle('Coinflip results!')
                .addField('The winner was:', doRandHT())
                .setColor(0xA22EF0)
            message.channel.send(embedCf);
    }
}