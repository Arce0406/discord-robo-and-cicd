// @ts-check
import { config } from 'dotenv';
import { Client, REST, Routes } from 'discord.js';
config();

(async () => {
	try {
		console.info('Started delete application (/) commands.');

		const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;
		const rest = new REST().setToken(DISCORD_TOKEN);

		// Arce Test
		await rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, "875063019779010561"), { body: [] });

		// login
		const client = new Client({ intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'], });
		await client.login(DISCORD_TOKEN);

		if (client.user) client.user.setStatus("invisible");

		const guilds = await client.guilds.fetch();
		await Promise.all(guilds.map(guild => rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), { body: [] })))
		// client.application.id

		console.info('Successfully delete application (/) commands.');
	} catch (error) {
		console.info(error);
	} finally {
		process.exit();
	}
})();