const ID = process.env.ID;

module.exports = {
    name: 'ready',
    once: true,
    async execute(client, cmds) {
        try {
            await client.rest.put(`/applications/${ID}/commands`, { body: cmds });
        } catch (err) {
            if (err) console.error(err);
              process.exit(1);
        };
        console.log('機器人成功上線');
    }
};