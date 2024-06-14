import { Flashcore, type CommandConfig } from 'robo.js'
import type { CommandInteraction } from 'discord.js'
import { Task } from '../task'

export const config: CommandConfig = {
    options: [
        {
            name: 'name',
            description: 'The task name',
            type: 'string',
            required: true
        }
    ]
}

export default async (interaction: CommandInteraction) => {
    const userId = interaction.user.id
    const taskName = interaction.options.get('name')?.value as string
    const newTask: Task = { name: taskName, createdAt: Date.now() }
    await Flashcore.set(userId, newTask)
    return `New task: ${taskName} is stored! 🎉`
}