require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "", // <==== PASTE YOU TOKEN
    prefix: process.env.PREFIX || "c?", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
    color: process.env.EMBED_COLOR || "#B072FF", // <==== YOU EMBEDED HEX COLOR
    owner: process.env.OWNER_ID || "", // <==== BOTS OWNER ID
    guildLogs: process.env.GUILD_LOGS || "", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "60000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "", // <==== SPOTIFY CLIENT ID
        clientSecret: process.env.SPOTIFY_SECRET || "", // <==== SPOTIFY CLIENT SECRET
        reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
        playlistLimit: 2, // <==== 1 = 100 TRACKS
        albumLimit: 2, // <==== 1 = 50 TRACKS
        artistLimit: 2, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Node 1", // lavalink node name (anything you want)
            host: process.env.NODE_HOST1 || "212.192.29.91", // <==== LAVALINK NAME HOST
            port: parseInt(process.env.NODE_PORT1 || "25529"), // <==== LAVALINK PORT
            password: process.env.NODE_PASSWORD1 || "reedrouxv4lavalink", // <==== PASSWORD/AUTH
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS1 || ["singapore"], // <==== AVAILABLE LAVALINK REGIONS [ "singapore","indonesian","japan"," ]
        },
        {
            name: process.env.NODE_NAME2 || "Node 2", // lavalink node name (anything you want)
            host: process.env.NODE_HOST2 || "lava.link", // <==== LAVALINK NAME HOST
            port: parseInt(process.env.NODE_PORT2 || "80"), // <==== LAVALINK PORT
            password: process.env.NODE_PASSWORD2 || "kronix", // <==== PASSWORD/AUTH
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS2 || ["singapore"], // <==== AVAILABLE LAVALINK REGIONS [ "singapore","indonesian","japan"," ]
        }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://drowstiel:nETmcS0rM1oYmwE4@cluster0.nmgvne2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/TjtXnYD9SP", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://www.gearhost.my.id/", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1122883732303511583&permissions=8&scope=bot+applications.commands", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "https://i.imgur.com/HB32QqX.png", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}


/**
 * @INFO
 * Bot Coded by Science Gear | https://www.youtube.com/c/ScienceGearYT
 * @INFO
 *  Muzio Bot | https://dsc.gg/sciencegear
 * @INFO
 * Don't Remove Credits
 * @INFO
 */
