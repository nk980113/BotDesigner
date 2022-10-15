const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        await (await member.client.channels.fetch(process.env.WELCOME_CHANNEL))
            .send({ content: `<!@${member.id}> （${member.user.tag}）
> 進群後務必記得到 <#945319293577486337> 查看規則，
> 並 ***至 <#1021370559667388446> 選取身分組*** 唷！`, embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        iconURL: 'https://images-ext-1.discordapp.net/external/2CXpUf2EKCAWWmKUXMQaZJ7_wnCjbTS7nPzajHkDT5I/%3Fsize%3D300/https/cdn.discordapp.com/icons/891279597830803467/c0704ea7d4eee5e01595c71b25b43942.png',
                        name: member.guild.name,
                    })
                    .setTitle('歡迎新成員加入伺服器')
                    .setDescription(`歡迎來到BotDesign這個小小的伺服器！
在這裡，您可以討論程式設計相關的所有大小事，
也可以討論Discord機器人的製作、各類程式的設計經驗，
若都不會的話也可以單純和大家聊天唷！`)
                    .setFooter({ text: `伺服器名稱：${member.guild.name} | 伺服器人數： ${member.guild.memberCount}` })
                    .setColor('#F8E71C')
            ] });
    }
};