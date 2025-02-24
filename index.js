const config = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
        await interaction.reply({ content: "pong", ephemeral: true });
    }

    if (commandName === "bruh") {
        const textReceived = interaction.options.getString('bruh');
        await interaction.reply({ content: `bruh and ${textReceived}`, ephemeral: true });
    }
});

client.on('error', console.error);

client.login(config.botToken).catch(console.error);
