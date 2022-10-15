const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('得知機器人當前的延遲數據'),
    async execute(interaction) {
        await interaction.reply(`🏠╎DiscordAPI延遲：${interaction.client.ws.ping}ms\n🤖╎機器人延遲：${Date.now() - interaction.createdTimestamp}ms`);
    }
};