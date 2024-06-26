/**
 * @file src/modules/translate/commands/translate.ts
 * @description Translate text to another language.
 */
import { AI } from '@robojs/ai'
import type { CommandInteraction } from 'discord.js'
import type { CommandConfig } from 'robo.js'

const languageOptions = [
    { name: 'English/英語', value: 'English' },
    { name: 'Chinese/中国語/中文', value: 'Chinese' },
    { name: 'Japanese/日本語', value: 'Japanese' }
]

export const config: CommandConfig = {
    options: [
        {
            name: 'text',
            description: 'The text will be translate',
            type: 'string',
            required: true
        },
        {
            name: 'source-language',
            description: 'The source language code',
            choices: [
                { name: 'Auto', value: 'unknown language' },
                ...languageOptions
            ],
            required: true
        },
        {
            name: 'target-language',
            description: 'The target language code',
            choices: languageOptions,
            required: true
        },
    ]
}

export default async (interaction: CommandInteraction) => {
    const text = interaction.options.get('text')?.value as string
    const sourceLanguage = interaction.options.get('source-language')?.value as string
    const targetLanguage = interaction.options.get('target-language')?.value as string
    console.log('Text:', text)
    console.log('Source Language:', sourceLanguage)
    console.log('Target Language:', targetLanguage)

    const response = await AI.chatSync([{
        role: 'system',
        content: `You will be provided with a sentence in ${sourceLanguage}, and your task is to translate it into ${targetLanguage}.`,
    }, {
        role: 'user',
        content: text,
    }], {
        channel: interaction.channel,
        member: interaction.member,
    })

    console.log('Response:')
    console.log(response)

    return response.text
}
