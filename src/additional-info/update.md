# Updating from v3 to v4

## Before you start

v4 requires discord.js v14 to use, so make sure you're up to date. To update your discord.js code, check [their guide](https://discordjs.guide/) before updating DisTube code.
Also, update plugins if you're using them.

## DisTube

### DisTubeOptions

Built-in `youtube-dl` plugin is removed for more convenient updating in the future. Now, you can use new [`@distube/yt-dlp` plugin](https://www.npmjs.com/package/@distube/yt-dlp).

```diff
- const distube = new DisTube({ youtubeDL: true, updateYouTubeDL: false })
+ const { YtDlpPlugin } = require("@distube/yt-dlp")
+ const distube = new DisTube({ plugins: [new YtDlpPlugin({ update: false })] })
```

### DisTube#play

-   `DisTube#play` no longer supports `Message` as its parameter, requiring `BaseGuildVoiceChannel` instead (same as v3 `DisTube#playVoiceChannel`). This also has an `options` parameter for providing optional arguments.

```diff
- distube.play(message, ...)
+ distube.play(message.member.voice.channel, ..., { message, member: message.member })
```

-   `options.position` has been added for customize added song/playlist position. That why `options.unshift` no longer exists on this version.

```diff
- distube.play(..., { unshift: true })
+ distube.play(..., { position: 1 })
```

-   Now this method throw an error if DisTube cannot play the input song instead of emitting to the `error` event.

```js
distube.play().catch(err => {
    message.reply(err)
})
// Or
async function play() {
    try {
        await distube.play()
    } catch (err) {
        message.reply(err)
    }
}
```

### DisTube#playVoiceChannel

This method has been removed and replaced with `DisTube#play`.

```diff
- distube.playVoiceChannel(...)
+ distube.play(...)
```

### DisTube#playCustomPlaylist

`DisTube#playCustomPlaylist` has been removed. You can use `DisTube#createCustomPlaylist` and `DisTube#play` instead.

```diff
const songs = ["https://www.youtube.com/watch?v=xxx", "https://www.youtube.com/watch?v=yyy"];
- distube.playCustomPlaylist(message, songs, { name: "My playlist name" });
+ const playlist = await distube.createCustomPlaylist(songs, {
+     member: message.member,
+     properties: { name: "My playlist name" },
+     parallel: true
+ });
+ distube.play(message.member.voice.channel, playlist);
```

## Queue

### Queue#setFilter

-   `Queue#setFilter` has been removed. You can use `Queue#filters` instead.

### Queue#filters

-   `Queue#filters` is now `FilterManager`, which is more flexible and support custom filters.

```js
queue.filters.add('a-filter')
// filters: ["a-filter"]
queue.filters.add(['another-filter', 'a-third-filter'])
// filters: ["a-filter", "another-filter", "a-third-filter"]
queue.filters.add(['a-third-filter'])
// filters: ["a-filter", "another-filter", "a-third-filter"]
queue.filters.remove(['a-filter', 'a-third-filter'])
// filters: ["another-filter"]
queue.filters.set(['1', '2', '3'])
// filters: ["1", "2", "3"]
queue.filters.clear()
// filters: []
```
