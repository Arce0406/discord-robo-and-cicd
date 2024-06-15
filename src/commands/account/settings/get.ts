import { Flashcore } from 'robo.js'
import type { CommandInteraction } from 'discord.js'
import { AccountSettingType } from '../../../types/AccountSettingType'

export default async (interaction: CommandInteraction) => {
	const userId = interaction.user.id

	const settings: AccountSettingType = await Flashcore.get(userId)
	if (!settings) return 'No settings found. Add your account setting first! 📝'

	return [
		`Your account settings > prop1: ${settings.prop1}!`,
		`Created at: ${new Date(settings.createdAt).toLocaleString()}`
	].join('\n')
}