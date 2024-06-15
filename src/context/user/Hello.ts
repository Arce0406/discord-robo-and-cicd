/**
 * @file src/context/user/Hello.ts
 * @description Say hello to a user.
 */
import type { CommandConfig } from 'robo.js'
import type { UserContextMenuCommandInteraction, GuildMember } from 'discord.js'

export const config: CommandConfig = {
    description: 'Hello world!',
}

export default async function (interaction: UserContextMenuCommandInteraction, user: GuildMember) {
    interaction.reply(`Hello, ${user.displayName}!`)
}
