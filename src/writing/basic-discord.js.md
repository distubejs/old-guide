---
description: DisTube is a Discord.js v12 module. Let's get started with basic discord.js.
---

# Basic Discord.js

## Creating a configuration file

You should write a configuration file for storing some static data that can be easily updated in a single place. Open your project folder, create a `config.json` file and add in the code below.

```json
{
	"prefix": "!",
	"token": "Your Bot Token"
}
```

To get your bot token, you need to visit Discord Developer Portal and copy it from the bot section.

![](~@/images/image3.png)

## Writing your bot file

Create a `index.js` file or whatever you wish, as long as it ends with `.js` and open it. 

First, import dependencies.

```javascript
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
```

Then, create a Discord.js' client and log in.

```javascript
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Logged in!')
})

client.login(token)
```

Now you can start the file using the node command and your bot should be online.

:::: tabs

::: tab Console
```bash
node index.js
```
:::

::: tab index.js
```javascript
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Logged in!')
})

client.login(token)
```
:::

::::
