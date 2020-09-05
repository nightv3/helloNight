const { MessageEmbed } = require("discord.js");
const { COLOR, PREFIX, OWNER_ID  }= require("../config.json")
module.exports = {
  name: "help",
  aliases: ["h", "cmd", "cmds"],
  description: "Display all commands and descriptions",
  execute(message) {
   let HelpEmbed = new MessageEmbed()
   .setTitle("NightBot Help")
   .setURL(``)
   .addField(`
> :robot: **INFO (9)**`,
`\`${PREFIX}help\`, \`${PREFIX}ping\`, \`${PREFIX}botinfo\`, \`${PREFIX}members\`, \`${PREFIX}contact\`, \`${PREFIX}avatar\`, \`${PREFIX}uptime\`, \`${PREFIX}avatarserver\`, \`${PREFIX}clear\`,\`${PREFIX}anime\`

> :notes: **MUSIC (13)**  
\`${PREFIX}Play\`, \`${PREFIX}pause\`, \`${PREFIX}skip\`, \`${PREFIX}stop\`, \`${PREFIX}queue\`, \`${PREFIX}skipto\`, \`${PREFIX}playlist\`, \`${PREFIX}nowplaying\`, \`${PREFIX}loop\`, \`${PREFIX}shuffle\`, \`${PREFIX}lyrics\`, \`${PREFIX}search\`, \`${PREFIX}pruning\`

> :credit_card: **COINS (2)**  
\`${PREFIX}daily\`, \`${PREFIX}credits\`

> :video_game:  **Games (1)**  
\`${PREFIX}XO\`



`, true)
      
     
   
   .setColor(COLOR)
   .setThumbnail(message.client.user.displayAvatarURL())
   message.channel.send(HelpEmbed)
  }
}