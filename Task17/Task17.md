### Editing HTML Elements on a Live Page (via DevTools)

1. **Inspect and Edit Text Content**

![edit text](./images/changeText.png)

2. **Learn to insert DOM elements using the Elements panel.**

![dom elements](./images/newDOMElement.png)

3. **Modify Attributes (for eg, if its an img tag, then update its src tag)**

- Before:

![](./images/beforeAttributeChange.png)

- After:

![](./images/afterAttributeChange.png)

4. **Use inline styles and CSS properties to manipulate visibility**

- Using display:none

![display none](./images/inlineCSSVisibility.png)

- Using visibility:hidden

![visibility hidden](./images/inlineCSSVisibility1.png)

- Using opacity:0

![opacity](./images/inlineCSSVisibility2.png)

5. **Edit HTML Structure**

- Before reordering

![before](./images/reorderElements.png)

- After reordering

![after](./images/reorderElements1.png)

6. **Live Editing via Console**

- document.body.style.background = 'lightblue';

![backgroundcolor](./images/bgColorChange.png)

- document.querySelector('h1').textContent = 'Edited from Console';

![backgroundcolor](./images/changeTextConsole.png)

7. **What’s the difference between editing HTML live vs editing source code?**

**Live HTML (DevTools)**
- Changes are temporary
- Used for debugging and live testing
- Affects only the browser, not the actual project
- Instant visual feedback without modifying files

**Source Code**
- Changes are permanent
- Modifies the actual project files
- Persists after reload and deployment

8. **Why do changes disappear after reload?** <br>
Changes made using Inspect / DevTools are temporary because they exist only in the browser’s memory (RAM).

9. **How can DevTools help debug layout or style issues?** <br>
DevTools helps debug layout and style issues by allowing developers to inspect, edit, and visualize CSS in real time.

**How DevTools helps debug layout/style issues**
- Inspect elements and their applied styles
- View CSS rules and computed values
- Check the box model for spacing and sizing issues
- Edit CSS live for instant testing
- Test responsiveness on different screen sizes