const fs = require("fs");
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

exports.run = (client, message, args, dev) => {
    if (!args[1]) {
   const embed = new Discord.MessageEmbed()
      .setColor("6a0d40")
      .setDescription(`
💰 - __Economy__
💰┇daily (d) -  cash (c)
💰┇work (w)  - steal (st)
💰┇check (ch) - deposit (de)
💰┇send (se) - rob (ro)

🎮 - __Game__
🎮┇coinflip - slots

⚙️ - __Moderation Commands__
⚙️┇lock - unlock - bot 
⚙️┇server - kick - avatar
⚙️┇clear - role - invite
⚙️┇support - server
`)
    
       message.channel.send(embed);
      }
    }
/////
exports.conf = {
  enabled: true,
  aliases: ['h'],
};

exports.help = {
  name: 'help',
};
