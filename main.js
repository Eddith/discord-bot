const { Client, Collection, Intents } = require("discord.js"); // Discord.js
require('dotenv').config(); // Load .env file

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Create new client

const prefix = "-";

const fs = require("fs");

client.commands = new Collection();  // Create new collection for commands

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("messageCreate", (message) => { // When a message is created
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "youtube") {
    client.commands.get("youtube").execute(message, args);
  }
});


client.login(process.env.TOKEN);
