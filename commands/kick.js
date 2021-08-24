module.exports.run = (client, message, args, queue, searcher) => {
    if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')) {

        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        } else {
            message.channel.send('Please mention a member to kick')
        }

    } else {
        message.channel.send('You dont have permissions!')
    }
}

module.exports.config = {
    name: "kick",
    description: "",
    usage: "<prefix>kick <mention> [reason]",
    accessableby: "Mods",
    aliases: ["k"]
}
