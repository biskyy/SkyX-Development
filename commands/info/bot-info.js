const Discord = require('discord.js')
module.exports = {
    name: 'botinfosadawd',
    description: 'Info about bot',
    run: (message) => {
      const client = Discord.Client
      const embedBotInfo = new Discord.MessageEmbed()
        .addFields(
          {
            name: 'Bot tag',
            value: client.user.tag,
          },
          {
            name: 'Version',
            value: version,
          },
          {
            name: "Server's command prefix",
            value: message.guild.commandPrefix,
          },
          {
            name: 'Time since last restart',
            value: `${process.uptime().toFixed(2)}s`,
          },
          {
            name: 'Server count',
            value: client.guilds.cache.size,
          }
        )
  
      message.channel.send(embedBotInfo)
    }
}