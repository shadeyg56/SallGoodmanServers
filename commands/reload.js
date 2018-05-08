exports.run = async (client, message, args, level) => {
  if (client.bot_owners.indexOf(message.author.id) > -1) {
    if (!args || args.length < 1) return message.reply("Must provide a command to reload. Derp.");

    let response = await client.unloadCommand(args[0]);
    if (response) return message.reply(`Error Unloading: ${response}`);
    response = client.loadCommand(args[0]);
    if (response) return message.reply(`Error Loading: ${response}`);
    message.reply(`The command \`${args[0]}\` has been reloaded`);

  } else {
    message.reply("You're not a bot owner silly");
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot owner"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "Reloads a command that\"s been modified.",
  usage: "reload [command]"
};