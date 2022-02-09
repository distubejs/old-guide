# Updating from v3 to v4

## Before you start

v4 requires discord.js v14 to use, so make sure you're up to date. To update your discord.js code, check [their guide](https://discordjs.guide/) before updating DisTube code.

## DisTube

### DisTubeOptions

Built-in `youtube-dl` plugin is removed for more convenient updating in the future. Now, you can use new [`@distube/yt-dlp` plugin](https://www.npmjs.com/package/@distube/yt-dlp).

```diff
- const distube = new DisTube({ youtubeDL: true, updateYouTubeDL: true })
+ const { YtDlpPlugin } = require("@distube/yt-dlp")
+ const distube = new DisTube({ plugins: [new YtDlpPlugin()] })
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
