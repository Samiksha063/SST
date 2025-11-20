## Why requestAnimationFrame is smoother than setInterval
- requestAnimationFrame calls the animation function just before it paints the screen(60 times per second). This matches the screens natural update cycle.

- The animation gets paused  when the tab is inactive saving battery while setInterval keeps running even when the user cannot see the animation in the tab.

- setInterval runs at fixed time interval and does not check how long the browser to finish draw while requestAnimationFrame actually waits for the browser to finish its rendering before moving to the next animation step.
