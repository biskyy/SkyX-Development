const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'list of commands',
    run: (message, args)=>{
        const embedHelp = new Discord.MessageEmbed()
        switch(args[0]){
            case 'fun':
                    embedHelp.setTitle('Fun commands.')
                    embedHelp.addField('Randomness', '`>cf`\n-flips a coin.\n\n`>8ball [question]`\n-responds to your question.')
                    embedHelp.addField('Troll', '`>l [@user]`\n-L\n\n`>rev [@user]`\n-no u\n\n`>f [@user]`\n-press f to pay respects.')
                    embedHelp.setColor(0xA22EF0)
                message.channel.send(embedHelp)
                break;
            case 'mod':
                switch(args[1]){
                    case 'roles':
                        embedHelp.setAuthor('SkyX Moderation Commands')
                        embedHelp.addField('Roles', '`>role [@target-user] [role-name]`\n- gives that specified user a role -> requires **Manage Roles** permission.\n\n`>delrole [@target-user] [role-name]`\n- removes a role from the specified user -> requires **Manage Role** permission.\n\n`>hasrole [@target-user] [role-name]`\n- verify\'s either a user has a role or not -> doesn\'t require any permissions.')
                        embedHelp.setColor(0xA22EF0)
                        message.channel.send(embedHelp)
                        break;
                    case 'messages':
                        embedHelp.setAuthor('SkyX Moderation Commands')
                        embedHelp.addField('Messages', '`>clear [amount]`\n-deletes the specified amount of messages')
                        embedHelp.setColor(0xA22EF0)
                        message.channel.send(embedHelp)
                        break;

                    default:
                            embedHelp.setAuthor('SkyX Moderation Commands')
                            embedHelp.setTitle('Moderation')
                            embedHelp.addField('Messages', '`>clear [amount]`\n-deletes the specified amount of messages')
                            embedHelp.addField('Roles', '`>role [@target-user] [role-name]`\n- gives that specified user a role -> requires **Manage Roles** permission.\n\n`>delrole [@target-user] [role-name]`\n- removes a role from the specified user -> requires **Manage Role** permission.\n\n`>hasrole [@target-user] [role-name]`\n- verify\'s either a user has a role or not -> doesn\'t require any permissions.')
                            embedHelp.setColor(0xA22EF0)
                        message.channel.send(embedHelp)
                }
                break;
            case 'misc':
                embedHelp.setTitle('Misc')
                embedHelp.addField('Users', '`>nick [@user] [nick]`\n-changes the nickname of a user.\n\n`>profile [@user]`\n-displays info about user.\n\n`>avatar [@user]`\n-gets the avatar of a user.')
                embedHelp.setColor(0xA22EF0)
                message.channel.send(embedHelp)
                break;
            case 'info':
                embedHelp.setTitle('Info')
                embedHelp.addField('Help', '`>help`\n- displays a list of commands.')
                embedHelp.addField('Coding', '`>docs [search term]`\n- searchs the Discord.js.')
                embedHelp.setColor(0xA22EF0);
                message.channel.send(embedHelp);
                break;
            default:
            embedHelp.setAuthor('Help for SkyX Bot')
            embedHelp.addFields(
                {
                    name: 'Moderation',
                    value: '`>help mod` - displays a list of commands with moderation commands.'
                },
                {
                    name: 'Fun',
                    value: '`>help fun` - displays a list of commands with fun commands.'
                },
                {
                    name: 'Misc',
                    value: '`>help misc` - displays a list of commands with misc commands.'
                },
                {
                    name: 'Info',
                    value: '`>help info` - displays a list of commands with information commands.'
                },
                {
                    name: 'Others',
                    value: '`>invite`\n-provides a link to invite the bot to your server.\n`>git`\n-gives you a link with the source code of this bot.'
                }
            )
            embedHelp.setColor(0xA22EF0)
            message.channel.send(embedHelp)
        }
    }
}