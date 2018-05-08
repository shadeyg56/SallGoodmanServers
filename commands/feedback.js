const discord = require("discord.js");

exports.run = async (client, message, args, level) => {
	const text = args.join(" ");
	for (const owner of client.bot_owners) {
		const embed = new discord.RichEmbed().setTitle("Bot Feedback!").setDescription(text).setColor(0xed).setAuthor(`${message.author.username}#${message.author.discriminator} | ID: ${message.author.id}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`);
		client.users.get(owner).send(embed);
	}
	message.reply("Thanks for the feedback. Your message has been sent to the bot owners. Thanks :D");

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "feedback",
  category: "Miscellaneous",
  description: "Send feedback for the bot.",
  usage: "feedback [msg]"
};