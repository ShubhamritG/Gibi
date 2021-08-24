module.exports.run = (client, message, args, queue, searcher) => {
    message.channel.send(`Ping is being mesured...`).then(resultMessage => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp;

        resultMessage.edit(`Pong! Bot: ${ping} | API: ${client.ws.ping}`)
    })
}

module.exports.config = {
    name: "ping",
    aliases: ["ping"]
}