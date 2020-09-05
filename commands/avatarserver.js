const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "avatarserver",
  aliases: ["iconserver", "servericon"],
  description: "Display Avatar of your or @SomeOne",
  execute(message) {
    
let doma = new MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL())
    .setImage(message.guild.iconURL(({ format: 'png', size: 1024 })))
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
    message.channel.send(doma)
  
}
}