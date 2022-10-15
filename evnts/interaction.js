const { InteractionType } = require('discord-api-types/v10');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        switch (interaction.type) {
            case InteractionType.ApplicationCommand: {
                const cmd = interaction.client.commands.get(interaction.commandName);
                if (!cmd) return;
                try {
                    await cmd.execute(interaction);
                } catch (err) {
                    if (err) console.error(err);
                    await interaction.reply({ content: '機器人發生錯誤，請回報開發人員或稍後再試', ephemeral: true });
                };
            }
        }
    }
};