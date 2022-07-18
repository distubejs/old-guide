---
description: This page is a follow-up and bases on the code of the main page.
---

# Play command

::: tip Events
This command will emit `playSong`, `addSong`, and `addList` events.
:::

::: tip Built-in search handling
If `searchSongs` option is enabled and a user send a not-url string, it will emit `searchResult`, `searchCancel`, `searchDone`, `searchInvalidAnswer`, and `searchNoResult` event
:::

With [`distube.play()`](https://distube.js.org/DisTube.html#play) method, your bot will join a voice channel and play song from the url or YouTube based on the top match for the string given.

:::: tabs
::: tab Play Command

```js
if (command === 'play')
    distube
        .play(message.member.voice.channel, args.join(' '), {
            message,
            textChannel: message.channel,
            member: message.member,
        })
        .catch(err => {
            message.reply(err.message)
        })
```

:::

::: tab Message Listener

```js
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(' ')
    const command = args.shift().toLowerCase()

    if (command === 'ping') message.channel.send('Pong!')

    if (command === 'play')
        distube
            .play(message.member.voice.channel, args.join(' '), {
                message,
                textChannel: message.channel,
                member: message.member,
            })
            .catch(err => {
                message.reply(err.message)
            })
})
```

:::
::::

Now your bot can play music when you are in a voice channel and send `!play a random song name` message. To reply the command, you should listen to [DisTube events](../listening-to-distube-events/) to know exactly the song and queue properties.
