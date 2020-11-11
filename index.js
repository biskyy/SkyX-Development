// const DicordJS = require('discord.js')
// const bot = new DicordJS.Client()
require('dotenv').config()
const config = require('./config.json')

const Discord = require('discord.js')
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '>',
	owner: '356860353776451614'
});

const WOKCommands = require('wokcommands')
require('dotenv').config()

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['misc', 'misc commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
        help: false,
        unknownCommand: false
    })
    
client.on('ready', async ()=>{
    console.log('READY')
    client.user.setActivity('>help | SkyX')
    
    new WOKCommands(client, 'commands')

    .setMongoPath(process.env.MONGO_URI)
})

client.on('message', message=>{
  
})

client.login(config.token)