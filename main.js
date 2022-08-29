const Discord = require("discord.js"); // Discord.js
require("dotenv").config(); // Load .env file

// Create new client

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "-"; // Prefix for commands

const fs = require("fs");

client.commands = new Discord.Collection(); // Create new collection for commands

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Bot is all ready

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

// When a message is created

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "youtube") {
    client.commands.get("youtube").execute(message, args);
  } else if (command === "poseidon") {
    client.commands.get("poseidon").execute(message, args, Discord);
  }
});

// When a warning is thrown

client.on("warning", (warning) => {
  console.log(warning.stack);
});

client.login(process.env.TOKEN);
