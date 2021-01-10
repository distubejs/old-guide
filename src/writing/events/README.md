---
description: >-
  This page and its subpage are a follow-up and bases on the code of the
  previous page.
---

# Listening to DisTube events

::: warning
You should add event listeners outside event listeners (avoid listening multiple times) or in the `ready` event which runs only once time. (Like the `index.js` tab below)
:::

::: danger
You have to listen to [`error`](error-event.md) event or Node.js process will exit and crash your bot.
:::