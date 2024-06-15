export default {
    // Model for your AI. You might stick with the default. (string)
    model: 'gpt-3.5-turbo',

    // Tell your Robo a backstory or role. (string)
    // systemMessage: 'You are a wise wizard of Webland!',

    // Let Robo use or ignore specific commands. true for all commands, false for no commands, array for only specific commands. (boolean or string array)
    // commands: ['translate'],

    // Knowledge injection & long-term memory. (boolean; default: true)
    // insights: true,

    // Assistant API delay for OpenAI rate limiting (number; default: 1_000)
    // pollDelay: 4_000,

    // If specified, your AI will only respond to messages in these channels. (object with array of string IDs)
    // restrict: {
    //     channelIds: ['channelID3']
    // },

    // Special channels where Robo talks freely. (object with array of string IDs)
    // whitelist: {
    //     channelIds: ['channelID1', 'channelID2']
    // }
}
