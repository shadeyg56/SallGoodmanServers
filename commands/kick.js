exports.run = async (client, message, args, level) => {
	const x = args.join(" ");
	const member = message.guild.member(x);
	const author = message.guild.member(message.author)
	if (author.hasPermission("kick_members")) {
		member.kick();
		message.reply(`Succesfully kicked ${member.name}`)
		
	} else {
		message.reply("You need **Kick Members** permissions for this");
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "kick",
  category: "Moderation",
  description: "Kick a member in your guild",
  usage: "kick <member>"
};