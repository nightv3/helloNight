const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "avatar",
  aliases: ["صورة", "افتار"],
  description: "Display Avatar of your or @SomeOne",
  execute(message) {
       const mm = message.mentions.members.first() || message.member;

    const embed = new MessageEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL())
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL())
        .setImage(mm.user.avatarURL({ format: 'png', size: 1024 }))
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL())
        message.channel.send(embed);
 
}
}
