const Discord = require ("discord.js");

const TOKEN = "NDM0MTI0NzQ2ODIxNDY4MTYw.DbeIcQ.y0gtPuftDkVitDvBA2da4qig9fc"
cost PREFIX = "/"

var bot = new Discord.Client();

bot.on("ready",function(){
    console.log("READY");
    bot.user.setGame("/help | by skullymax");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user))return;

    if (!message.content.startsWith(bott.PREFIX)) return;

    var args = message.content.substring(bott.PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("Pong!");
            break;
        default:
            message.channel.send("Invalid command")
});

bot.login(TOKEN);
