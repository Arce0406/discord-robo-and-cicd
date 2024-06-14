import { Flashcore } from 'robo.js'
import type { CommandInteraction } from 'discord.js'
import { Task } from '../task'

export default async (interaction: CommandInteraction) => {
	const userId = interaction.user.id

	const task: Task = await Flashcore.get(userId)
    if(!task) return 'No task found. Add a task first! 📝'

	return `Your task: ${task.name}! Created at: ${new Date(task.createdAt).toLocaleString()} 🎉`
}