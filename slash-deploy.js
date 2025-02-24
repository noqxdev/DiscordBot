const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('./config.json'); 

const botToken = config.botToken;
const botId = config.botId;
const guildId = config.guildId;

const rest = new REST().setToken(botToken);
const slashregister = async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(botId, guildId),
            {
                body: [
                new SlashCommandBuilder()
                .setName('ping')
                .setDescription('Replies with pong!'),

                new SlashCommandBuilder()
                .setName('bruh')
                .setDescription("bruh")
                .addStringOption(option => option.setName('bruh').setDescription('bruh').setRequired(true))
                ]
           
            });
        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
}

slashregister();