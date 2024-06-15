/**
 * @file src/modules/time/commands/timezone.ts
 * @description Get user's timezone.
 */
import type { CommandConfig } from 'robo.js'
import type { CommandInteraction } from 'discord.js'

export const config: CommandConfig = {
	description: 'Get your timezone'
}

export default (interaction: CommandInteraction) => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
	interaction.reply(`Your timezone is ${timezone}! 🕰️`)
}
