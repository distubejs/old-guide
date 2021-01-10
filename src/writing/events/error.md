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
```javascript
distube.on('error', (message, error) => {
	message.channel.send(`An error encoutered: ${error}`)
})
```
:::

::: tab index.js
```javascript
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Logged in!')

	distube.on('error', (message, error) => {
		message.channel.send(`An error encountered: ${error}`)
	})
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'ping') {
		message.channel.send('Pong!')
	}
	if (command === 'play') {
		distube.play(message, args.join(' '))
	}
})

client.login(token)
```
:::
::::
