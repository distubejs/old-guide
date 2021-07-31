---
description: >-
  This page and its subpage are a follow-up and bases on the code of the
  previous page.
---

# Writing your music commands

## Reading messages

To read messages you only need to write a [`messageCreate`](https://discord.js.org/#/docs/main/master/class/Client?scrollTo=e-messageCreate) listener. Here you create a listener for the message event and get the message and save it into a `message` object if it is triggered.

```js
client.on('messageCreate', message => {

})
```

If the message either doesn't start with the prefix or was sent by a bot, exit early.

```js
if (!message.content.startsWith(prefix) || message.author.bot) return
```

Then create an `args` variable that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.

```js
const args = message.content.slice(prefix.length).trim().split(' ')
```

After that, create a `command` variable by calling `args.shift()`, which will take the first element in array and return it while also removing the command name from the original array.

```js
const command = args.shift().toLowerCase()
```

Now your `messageCreate` listener will look like that:

```js
client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()
})
```

## Adding a command

To add a command, simply compare `command` variable to your command name.

:::: tabs
::: tab Ping Command

```js
if (command === 'ping') {
	message.channel.send('Pong!')
}
```

:::

::: tab Message Listener

```js
client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

	if (command === 'ping') {
		message.channel.send('Pong!')
	}
})
```

:::
::::

### Import DisTube package

Before adding your music commands, you need to import DisTube package, which manage your queue and make your commands very simple. Edit the head of the bot file when import packages to make your code clean. You can go to [DisTube documentation](https://distube.js.org) to learn about DisTube's classes, events, etc.

```js
const Discord = require('discord.js')
const DisTube = require('distube')
const { prefix, token } = require('./config.json')
const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
})
const distube = new DisTube.default(client)
```