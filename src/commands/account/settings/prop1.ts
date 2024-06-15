import { Flashcore, type CommandConfig } from 'robo.js'
import type { CommandInteraction } from 'discord.js'
import { AccountSettingType } from '../../../types/AccountSettingType'

export const config: CommandConfig = {
    options: [
        {
            name: 'prop1',
            description: 'The test prop 1',
            type: 'string',
            required: true
        }
    ]
}

export default async (interaction: CommandInteraction) => {
    const userId = interaction.user.id
    const prop1 = interaction.options.get('prop1')?.value as string
    const newTask: AccountSettingType = { prop1: prop1, createdAt: Date.now() }
    await Flashcore.set(userId, newTask)
    return `Your account settings > prop1: ${prop1}`
}