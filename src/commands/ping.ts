import type { CommandConfig } from 'robo.js'
import type { Client, CommandInteraction } from 'discord.js'

export const config: CommandConfig = {
	description: 'Replies with Pong!'
}

export default (interaction: CommandInteraction) => {
	return `:ping_pong: Pong! ${interaction.client.ws.ping}ms`
}
