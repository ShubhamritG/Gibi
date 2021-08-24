module.exports.run = (client, message, args, queue, searcher) => {
    const target = message.mentions.users.first();
    if (!message.member.permissions.has("MANAGE_MESSAGES") || !message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send('You dont have the permission');
    
    if (target) {
        let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        let memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
            return

        }
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

        setTimeout(function () {
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);

        }, ms(args[1]));
    } else {
        message.channel.send('Cant find that member!');
    }
}

module.exports.config = {
    name: 'mute',
    aliases: ["m"]
}