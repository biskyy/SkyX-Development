const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = {
    name: 'docs',
    description: 'search a the docs',
    run: (message, args)=>{
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      args
    )}`

    axios
      .get(uri)
      .then((embed) => {
        const { data } = embed

        if (data && !data.error) {
          message.channel.send({ embed: data })
        } else {
          message.reply('Could not find that documentation')
        }
      })
      .catch((err) => {
        console.error(err)
      })
    }
}