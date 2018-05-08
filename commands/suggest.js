const discord = require("discord.js");

exports.run = async (client, message, args, level) => {
	const suggestion = args.join(" ");
	let embed = new discord.RichEmbed().setTitle("New Suggestion!").setDescription(suggestion).setColor(0xed).setAuthor(`${message.author.username}#${message.author.discriminator} | ID: ${message.author.id}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`);
	let x = await message.guild.channels.get("375167528399405056").send(embed).catch(console.error);
	x.react("👍").catch(console.error);
	x.react("👎").catch(console.error);
  message.reply("Your suggestion has been sent. Thanks!");

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["suggestion"],
  permLevel: "User"
};

exports.help = {
  name: "suggest",
  category: "Miscellaneous",
  description: "Suggest something for the server.",
  usage: "suggest [suggestion]"
};