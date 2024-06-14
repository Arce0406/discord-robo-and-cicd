import type { CommandConfig } from 'robo.js'
import type { CommandInteraction } from 'discord.js'

export const config: CommandConfig = {
	description: 'Replies with Pong!'
}

export default (interaction: CommandInteraction) => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
	interaction.reply(`Your timezone is ${timezone}! 🕰️`)
}