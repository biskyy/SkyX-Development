const Discord = require("discord.js");
module.exports = {
  name: "8ball",
  minArgs: 1,
  maxArgs: -1,
  description: "There is a big chance I insult you!",
  category: "fun",
  run: (message, args)=>{
    function doRandHT() {
        var rand = ['Yes!','Signs point to yes.', 'Yes.', 'Outlook good.', 'Most likely.', 'As I see it, yes.', 'You may rely on it.', 'Yes – definitely.', 'Without a doubt.', 'It is decidedly so.', 'It is certain.', 'Concentrate and ask again.', 'Cannot predict now.', 'Better not tell you now.', 'Ask again later.', 'Reply hazy, try again.', 'Very doubtful.', 'Outlook not so good.', 'My sources say no.', ' My reply is no.', 'Don\'t count on it.'];
        
        return rand[Math.floor(Math.random()*rand.length)];
        }
        
        const embedCf = new Discord.MessageEmbed()
            .setTitle('8ball response!')
            .addField('My response:', doRandHT())
            .setColor(0xA22EF0)
        message.channel.send(embedCf);
}
};