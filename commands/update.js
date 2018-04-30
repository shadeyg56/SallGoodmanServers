const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const path = require('path');

exports.run = async (client, message, args, level) => {
	if (client.bot_owners.indexOf(message.author.id) > -1) {
			const { stdout, stderr, err } = await exec(`git pull`);
	    if (err) return console.error(err);
	    const out = [];
	    if (stdout) out.push(stdout);
	    if (stderr) out.push(stderr);
	    await message.channel.send(out.join('---\n'), { code: true });
	    if (!stdout.toString().includes('Already up-to-date.')) {
	     client.commands.get("ping").run(client, message, args, level);
    }
  } else {
  	message.reply("You're not a bot owner silly")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['git', 'pull'],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "update",
  category: "Bot Owner",
  description: "updates the bot by pulling from its git repository.",
  usage: "update"
};