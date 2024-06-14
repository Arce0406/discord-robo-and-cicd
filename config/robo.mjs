// @ts-check

/**
 * @type {import('robo.js').Config}
 **/
export default {
	clientOptions: {
		intents: [
			'Guilds', 'GuildMessages', 'GuildMembers', 'GuildMessageReactions', 'GuildEmojisAndStickers', 'GuildPresences', 'GuildIntegrations', 'GuildWebhooks', 'GuildInvites', 'GuildVoiceStates', 'GuildMessageTyping',
			'DirectMessages', 'DirectMessageReactions', 'DirectMessageTyping',
			'MessageContent',
		]
	},
	plugins: [],
	type: 'robo',
	logger: {
		level: 'debug',
	},
	experimental: {
		userInstall: true,
		incrementalBuilds: true,
	}
}
