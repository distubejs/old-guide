---
description: >-
  First, you need to install Node.js, discord.js, and other DisTube
  requirements.
---

# Installing DisTube

## Installing Node.js

::: tip Node.js >= 12.0
If you have Node.js installed, but have an older version \(i.e. anything below 12.0\), you should upgrade to the 12.0.0 or above.
:::

#### Windows / macOS <a id="installing-on-windows"></a>

Go to [the Node.js website](https://nodejs.org/), download LTS _\(recommended\)_ or latest version, open it, and follow the instructions.

#### Linux <a id="installing-on-linux"></a>

Go to [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.

## Installing python

DisTube uses `youtube-dl` to play not-YouTube sites \(such as SoundCloud, Facebook, and [700+ more site](https://ytdl-org.github.io/youtube-dl/supportedsites.html)\). If you don't want to use it, skip this step.

To install python, simply go to [Download Python](https://www.python.org/downloads/) site, click on your OS and follow the instructions.

## Setting up a project folder

1. Create a new folder
2. Open command prompt / terminal on this folder.
3. Run `npm init` and fill the question. If you're not sure of something or just want to skip it, simply leave it blank and press enter.

## Installing DisTube

To install DisTube, open the console and install them by using this command.

```bash
npm install distube
```

And you need to install [required packages](../#requirement) too.

```bash
npm install discord.js @discordjs/voice @discord.js/opus ffmpeg-static sodium
```