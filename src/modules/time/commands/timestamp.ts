import type { CommandConfig } from 'robo.js'
import type { CommandInteraction } from 'discord.js'
import { TimestampStyles, time, codeBlock } from 'discord.js'

export const config: CommandConfig = {
    description: '將時間轉換成 Unix Timestamp，時區為用戶端時區。',
    options: [
        {
            name: 'year',
            description: '西元年，預設為當前年份',
            type: 'integer',
            min: 1970,
            max: 2038,
            required: false
        },
        {
            name: 'month',
            description: '月份 (1-12)，預設為當前月份',
            type: 'integer',
            min: 1,
            max: 12,
            required: false
        },
        {
            name: 'day',
            description: '日期 (1-31)，預設為當前日期',
            type: 'integer',
            min: 1,
            max: 31,
            required: false
        },
        {
            name: 'hour',
            description: '小時 (0-23)，預設為當前小時',
            type: 'integer',
            min: 0,
            max: 23,
            required: false
        },
        {
            name: 'minute',
            description: '分鐘 (0-59)，預設為當前分鐘',
            type: 'integer',
            min: 0,
            max: 59,
            required: false
        },
        {
            name: 'second',
            description: '秒 (0-59)，預設為 0',
            type: 'integer',
            min: 0,
            max: 59,
            required: false
        },
        {
            name: 'format',
            description: '時間格式',
            type: 'string',
            choices: [
                { name: 'default', value: 'default' },
                { name: 'short time', value: 't' },
                { name: 'long time', value: 'T' },
                { name: 'short date', value: 'd' },
                { name: 'long date', value: 'D' },
                { name: 'short date and time', value: 'f' },
                { name: 'long date and time', value: 'F' },
                { name: 'relative', value: 'R' },
            ],
        }
    ]
}

export default async (interaction: CommandInteraction) => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const today = new Date()
    const year = interaction.options.get('year')?.value as number || today.getFullYear()
    const month = interaction.options.get('month')?.value as number || today.getMonth()
    const day = interaction.options.get('day')?.value as number || today.getDate()
    const hour = interaction.options.get('hour')?.value as number || today.getHours()
    const minute = interaction.options.get('minute')?.value as number || today.getMinutes()
    const second = interaction.options.get('second')?.value as number || 0
    const format = interaction.options.get('format')?.value as string
    const timeFormat = getTimeFormat(format)
    const timestamp = new Date(year, month - 1, day, hour, minute, second)
    const newDatetime = time(timestamp, timeFormat)
    return `${newDatetime}\n${codeBlock(newDatetime)}`
}

function getTimeFormat(format: string) {
    switch (format) {
        case 'R':
            return TimestampStyles.RelativeTime
        case 'T':
            return TimestampStyles.LongTime
        case 't':
            return TimestampStyles.ShortTime
        case 'D':
            return TimestampStyles.LongDate
        case 'd':
            return TimestampStyles.ShortDate
        case 'F':
            return TimestampStyles.LongDateTime
        case 'f':
        default:
            return TimestampStyles.ShortDateTime
    }
}