---
description: >-
  A Discord.js module to simplify your music commands and play songs with
  audio filters on Discord without any API key.
---

# DisTube

## Features

- Build on @discordjs/voice
- Easy to use and customize
- Support YouTube, SoundCloud, Facebook, and [700+ more sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)
- Audio filters (bassboost, nightcore, vaporwave,...)
- Autoplay related songs
- Plugin system to support more sites ([Plugin List](https://distube.js.org/#/docs/DisTube/beta/plugin/list))

## Installation

```bash
npm install distube
```

### Requirement

- [Node.js](https://nodejs.org/) v12 or above
- [discord.js](https://discord.js.org) v12 or **v13 _(Recommended)_**
- [@discordjs/voice](https://github.com/discordjs/voice) - `npm install @discordjs/voice`
- [FFmpeg](https://www.ffmpeg.org/download.html) - `npm install ffmpeg-static`
- [@discordjs/opus](https://github.com/discordjs/opus) - `npm install @discordjs/opus`
- [sodium](https://www.npmjs.com/package/sodium) - `npm install sodium` <br> or [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) - `npm install libsodium-wrappers`
- [python](https://www.python.org/) _(Optional - For [`youtube-dl`](https://youtube-dl.org/) to support [700+ more sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html).)_

## Documentation

Read DisTube's definitions, properties, and events details on the [Documentation page](https://distube.js.org/).