const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    //if (helpArgs[0] === 'gaming') {
    //return message.reply("This is a Gaming information Command.")
    //}

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setURL('https://www.instagram.com/dankernaruto/')
            .setAuthor(`Here is the Avaible Commands to use:`)
            .addFields(
                { name: 'Moderations', value: '`ban`, `kick`, `mute`, `unmute`, `clear`, `setprefix`, `dm`', inline: true },
                { name: 'Fun', value: '`ping`, `meme`', inline: true },
                { name: 'Music', value: '`play`, `pause`, `resume`, `skip`, `stop`, `queue`, `fskip`, `loop one`, `loop all`, `loop off`, `lyrics`', inline: false }

            )
            .setFooter('This is the help list, use <prefix>help <command> for more info')
            .setColor('#ffa8a9');


        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if (helpArgs[0]) {
        let command = helpArgs[0];

        if (bot.commands.has(command)) {

            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
                .setAuthor(`${command.config.name} Command`)
                .setDescription(`
            - **Description** __${command.config.description || "There is no Description for this command."}__
            - **Usage:** __${command.config.usage || "No Usage"}__
            - **Permissions:** __${command.config.accessableby || "Members"}__
            - **Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
                .setColor('#ffa8a9')

            message.channel.send(embed);
        }
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "<prefix>help",
    accessableby: "Members",
    aliases: ["help"]
}