// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS

// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.

const { inspect } = require("util");
const { post } = require("snekfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { 
  const code = args.join(" ");
  const token = client.token.split("").join("[^]{0,2}");
  const rev = client.token.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  if (client.bot_owners.indexOf(message.author.id) > -1) {
    try {
      let output = eval(code);
      if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
      output = inspect(output, { depth: 0, maxArrayLength: null });
      output = output.replace(filter, "[TOKEN]");
      output = clean(output);
      if (output.length < 1950) {
        message.channel.send(`\`\`\`js\n${output}\n\`\`\``);
      } else {
      	  message.channel.send(`${output}`, {split:"\n", code:"js"});
      }
    } catch (error) {
      message.channel.send(`The following error occured \`\`\`js\n${error}\`\`\``);
    }

    function clean(text)  {
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    }
    } else {
      message.reply("You're not a bot owner silly")
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ev'],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "eval",
  category: "Bot Owner",
  description: "Evaluates arbitrary javascript.",
  usage: "eval [...code]"
}; 