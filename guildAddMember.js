module.exports = (client, member) => {
	member.guild.channels.get("341869250186838026").send(`${`<@${member.id}>`}, welcome to **${member.guild.name}**!. Please take a moment to read #rules and #information.`).catch(console.error);
};
