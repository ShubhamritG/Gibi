module.exports.run = async (client, message, queue, searcher) => {
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES") || !message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send('You dont have the permission');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
}

module.exports.config = {
    name: 'clear',
    aliases: ["purge", "prune", "cls", "clean"]
}