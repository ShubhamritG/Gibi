module.exports.run = (client, message, args, queue, searcher) => {
    if (message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send('Please mention a member to ban')
        }
    } else {
        message.channel.send('You dont have the permission')
    }
}

module.exports.config = {
    name: 'ban',
    aliases: ["b"]
}