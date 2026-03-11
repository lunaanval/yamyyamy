require("dotenv").config();
console.log("BOT starting...");

const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`login: ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {

  const channel = member.guild.channels.cache.get("1476370153603072086");

  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#ffb6c1")
    .setTitle("🌸 Welcome 🌸")
    .setDescription(`Welcome to the server, ${member}!`)
    .setImage("https://yamiserver.jp/wp-content/uploads/2026/03/welcomeyamyyamy.png");

  channel.send({ embeds: [embed] });

});

client.login(process.env.TOKEN).catch(console.error);