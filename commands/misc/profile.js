const Discord = require('discord.js')
module.exports = {
    name: 'profile',
    aliases: ['p'],
    description: 'info about a  user',
    run: async (message) => {
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    const embedUserProfile = new Discord.MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        },
        {
            name: 'Bot:',
            value: user.bot,
        }
      )
      .setColor(0xA22EF0)
      .setFooter('>help for more commands')

    channel.send(embedUserProfile)
  }
}
