const Discord = require ("discord.js");

const TOKEN = "NDM0MTI0NzQ2ODIxNDY4MTYw.DbedHg.JusQksZk_OQLnTZgRtoKp7FpekM"
const PREFIX = "/"

var bot = new Discord.Client();

bot.on("ready",function(){
    console.log("READY");
    bot.user.setGame("/help | by skullymax");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user))return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        default:
            message.channel.sendMessage("Invalid command")
    }
});

bot.login(TOKEN);
