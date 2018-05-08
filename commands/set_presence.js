String.prototype.title = function() {
  let up = this[0].toUpperCase();
  return up + this.slice(1);
};

exports.run = async (client, message, [type, status, msg], level) => {
	if (client.bot_owners.indexOf(message.author.id) > -1) {
		client.user.setStatus(status).catch(console.error);
		client.user.setActivity(msg, {type: type }).catch(console.error);
		message.reply(`Set the bot's status to ${type.title()} ${msg} while ${status}`);
	} else {
		message.reply("You're not a bot owner silly");
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["presence"],
  permLevel: "Bot owner"
};

exports.help = {
  name: "set_presence",
  category: "Bot owner",
  description: "change the bot's presence.",
  usage: "presence [type] [status] [msg]"
};