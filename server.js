const Discord = require ("discord.js");
var request = require ("request");
var googl = require('node-googl');
var bott = {
    PREFIX: "/",
    TOKEN: "NDM0MTI0NzQ2ODIxNDY4MTYw.Dbd4nA.DWLp1Aej1Y1eewVtKeNHNkvjrWM",
    AUTHORNAME: "skullymax",
    AUTHORDISC: "1129",
    AUTHORUID: "336612686185889792",
    GOOGLapi: "Hidden",
    BOTID: "434124746821468160",
    BOTPERMS: "363528",
    BOTSERV: "4yEnu",
    THEME: "https://youtu.be/AVS55EzWTMs"
}
var bot = new Discord.Client();

var ball = [
    "Yes",
    "No",
    "Maybe"
];

var cat = [
    "http://random.cat/meow.php",
]

bot.on("ready",function(){
    console.log("READY");
    bot.user.setGame("Do " + data.PREFIX + "help");
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
        case "pong":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("Ping!");
            break;
        case "author":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("I am a bot ran by " + bott.AUTHORNAME + "#" + bott.AUTHORDISC + ".");
            break;
        case "8ball":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            if (args[1]) message.channel.send(ball[Math.floor(Math.random() * ball.length)]);
            else message.channel.send("Please ask something ;-;");
            break;
        case "noticeme":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("I've noticed you, " + message.author.toString() + ". Be happy.");
            break;
        case "theme":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send(bott.THEME);
            break;
        case "invite":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            if (message.author.id == bott.AUTHORUID) {
                message.author.send("**Invite me to a server:** https://discordapp.com/oauth2/authorize?client_id="+ bott.BOTID +"&scope=bot&permissions=" + bott.BOTPERMS );
                message.channel.send("Sure, "+ bott.AUTHORNAME +". I've DM'ed you the invite link. \nAlso here's a link to the server: https://discord.gg/" + bott.BOTSERV)
            }
            else message.channel.send("You can't invite me to your server. :stuck_out_tongue: My server: https://discord.gg/" + bott.BOTSERV);
            break;
        case "rip":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("RIP Moon City, Your time has come. :cry::cry::cry:. You should know that " + message.author.toString() + " is one of these people who still love you. :cry:")
            break;
        case "help":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            message.channel.send("Check your DMs, " + message.author.toString() + ".")
            message.author.send("**Avabile commands**: \n \n **"+ PREFIX + "ping** - Make me reply *Pong!* \n **"+ PREFIX + "pong** - Make me reply *Ping!* \n **"+ PREFIX + "author** - Who is running me? \n **"+ PREFIX + "8ball** - Ask a question and I will reply *Yes*, *No* or *Maybe*. \n **"+ PREFIX + "noticeme** - Make me notce you. \n **"+ PREFIX + "theme** - Get a link to my theme \n **"+ PREFIX + "rip** - RIP Moon City, Your time has come \n **"+ PREFIX + "invite** - Invite me to your server \n **"+ PREFIX + "help** - Display this \n **"+ PREFIX + "cat** - Post a random cat picture  \n **"+ PREFIX + "googl** - Shorten a link!")
            break;
        case "cat":
            console.log(message.author.username +"#"+ message.author.discriminator + " UID "+ message.author.id +" called "+ args[0] +" Server: " + message.guild.name.toString() + ". Channel: #" + message.channel.name.toString() + "." )
            request({
                url: cat[Math.floor(Math.random() * cat.length)],
                json: true
            }, function (error, response, body) {
                message.channel.send("Your cat will load in a few seconds, " + message.author.toString() + "." )
                message.channel.send(body)
            })
            break;
        case "googl":
            if (args[1]){
                googl.shorten(args[1], bott.GOOGLapi, function(err, shortenedUrl) {
                    if (err) {
                        throw err;
                    }
                    message.channel.send("Your shortened link: " + shortenedUrl)
                });
            }
            else message.channel.send("Please provide a link ;-;");
            break;
        default:
            message.channel.send("I've searched far and wide, but I can't find that command.")
            break;
    }
});

bot.login(bott.TOKEN)
