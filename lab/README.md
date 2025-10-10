# 💡 CSS Basics Labs

## 🎯 Tasks

### 💠 Selectors

**Objective:** ⚡️ Get familiar with different CSS selectors and common styling properties.

Use the following selectors:

- **Element selector** to style all `<p>` tags (e.g., set color, line-height).
- **Class selector for** buttons (e.g., `.btn` to set background, padding).
- **ID selector** for a specific element (e.g., #main-title to change font-size).
- **Attribute selector** for links (e.g., a[target="_blank"] to underline them).
- **Descendant selector** (e.g., div p) to change inner text color.
- **Apply these properties**: `color`, `background-color`, `margin`, `padding`, `border`, `font-family`, `text-align`.

### 💠 Box Model

**Objective:** ⚡️ Understand and visualize how the CSS box model works.

- Create a `div` with some text content.
- Style it with `padding, border, and margin`. Give each one a different color using `background-color`.
- Use `browser dev tools` to inspect the element and explore the box model layout.
- Add `box-sizing: border-box;` and observe the difference.

### 💠 Positioning & Display

**Objective:** ⚡️ Learn how different positioning and display values affect layout.

- Create several div boxes with different position **values: static, relative, absolute, fixed, and sticky**.
- Observe how they behave when scrolling or nested inside containers.
- Try **display values: block, inline, inline-block, flex, and grid**.
- Add **borders** and **widths** to better see layout behavior.

### 💠 Flexbox & Grid

**Objective:** ⚡️ Practice using Flexbox and CSS Grid to build layouts.

- Create a container with 3 child boxes.
- Use Flexbox (display: flex) and experiment with:

    ``` css
        justify-content: space-between or center or flex-end
        align-items: stretch or center

    ```

- Switch to Grid:

    ```css
        display: grid;
        grid-template-columns: repeat(3, 1fr);
       👉🏾 Add gap between grid items.
    ```

### 💠 Responsive Design

**Objective:** ⚡️ Make content adapt to different screen sizes.

- Use `%`, `em`, and `rem` units to size fonts and elements.
- Use `vh` and `vw` for layout elements.
- Add a `media query` to change styles at `max-width: 600px`.
- Try hiding/showing elements or changing layout direction for mobile.

### 🪅 Animations & Transitions

**Objective:** ⚡️ Add transitions and keyframe animations for interactivity.

- Add :hover effects to buttons using `transition: all 0.3s ease`;
- Create a box that animates on load using `@keyframes`.

        Example: fade in or slide from left

- Trigger an animation on a button click using animation property

Enjoy coding!🚀🚀🚀