const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    aliases: ['ci'],
    description: 'clears the specified amount of messages',
    run: (message, args)=>{
        const amount = args.join(' '); // Amount of messages which should be deleted

        if (!amount) return message.reply('you haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
        if (isNaN(amount)) return message.reply('the amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

        if (amount > 100) return message.reply('you can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
        if (amount < 1) return message.reply('you have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

        message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        )});
        if(amount == 1){
            const embedDeleteMsgs1 = new Discord.MessageEmbed()
                .setTitle('>clear results')
                .addField('Results', `Successfully deleted ${amount} message.`)
                .setColor(0xA22EF0)
            message.channel.send(embedDeleteMsgs1).then(m => m.delete({timeout:5000}))
        }else{
        const embedDeleteMsgs = new Discord.MessageEmbed()
            .setTitle('>clear results')
            .addField('Results', `Successfully deleted ${amount} messages.`)
            .setColor(0xA22EF0)
        message.channel.send(embedDeleteMsgs).then(m => m.delete({timeout:3000}))
        }
    }
}