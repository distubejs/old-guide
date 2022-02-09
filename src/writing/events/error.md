---
description: This page is a follow-up and bases on the code of the main page.
---

# Error event

::: danger
You have to listen to `error` or Node.js process will exit and crash your bot.
:::

If you run this command when you are not in a voice channel, the video is unavailable, etc., DisTube will emit this event.

:::: tabs
::: tab Error Listener

```js
distube.on('error', (channel, error) => {
    console.error(error)
    channel.send(`An error encoutered: ${error.slice(0, 1979)}`) // Discord limits 2000 characters in a message
})
```

:::

::: tab index.js

```js
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const client = new Discord.Client({
    intents: ['Guilds', 'GuildVoiceStates', 'GuildMessages'],
})

client.once('ready', () => {
    console.log('Logged in!')

    distube.on('error', (channel, error) => {
        console.error(error)
        channel.send(`An error encoutered: ${error.slice(0, 1979)}`) // Discord limits 2000 characters in a message
    })
})

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(' ')
    const command = args.shift().toLowerCase()

    // Commands ...
})

client.login(token)
```

:::
::::
