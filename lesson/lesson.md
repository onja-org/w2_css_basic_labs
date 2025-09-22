# Complete CSS Basics Recap

## 1. CSS Selectors

CSS selectors are patterns used to select and style HTML elements. Think of them as a way to "target" specific elements on your webpage.

### Element Selector
The most basic selector - targets all elements of a specific HTML tag.

```css
p {
  color: #333;
  line-height: 1.6;
}
```

**What this does:**
- Selects ALL `<p>` elements on the page
- Sets their text color to dark gray (`#333`)
- Sets line spacing to 1.6 times the font size for better readability

### Class Selector
Uses a dot (`.`) to target elements with a specific class attribute. Classes can be reused on multiple elements.

```css
.btn {
  background: #007bff;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
}
```

**HTML Example:**
```html
<button class="btn">Click Me</button>
<a href="#" class="btn">Link Button</a>
```

**What this does:**
- Targets any element with `class="btn"`
- Creates a blue button style with white text
- Adds padding (space inside the button)
- Rounds the corners with `border-radius`

### ID Selector
Uses a hash (`#`) to target a single element with a specific ID. IDs should be unique on each page.

```css
#main-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}
```

**HTML Example:**
```html
<h1 id="main-title">Welcome to My Website</h1>
```

**What this does:**
- Targets the element with `id="main-title"`
- Makes the font size 2 times the root font size
- Centers the text horizontally
- Adds space below the title

### Attribute Selector
Targets elements based on their attributes and values.

```css
a[target="_blank"] {
  text-decoration: underline;
  color: #e74c3c;
}

input[type="email"] {
  border: 2px solid #3498db;
}
```

**What this does:**
- First rule: styles links that open in new tabs
- Second rule: styles email input fields with a blue border

### Descendant Selector
Targets elements that are nested inside other elements (uses a space).

```css
div p {
  color: #555;
  font-style: italic;
}

.sidebar ul li {
  list-style: none;
  padding: 0.5rem;
}
```

**HTML Example:**
```html
<div>
  <p>This paragraph will be styled</p>
</div>
<p>This paragraph will NOT be styled</p>
```

**What this does:**
- First rule: only paragraphs inside `<div>` elements get gray, italic text
- Second rule: list items inside `<ul>` elements inside `.sidebar` class get special styling

---

## 2. The CSS Box Model

Every HTML element is essentially a rectangular box. The CSS box model describes how the size of these boxes is calculated.

### Box Model Components

```css
.box-example {
  /* Content area */
  width: 200px;
  height: 100px;
  
  /* Padding - space between content and border */
  padding: 20px;
  
  /* Border - line around the padding */
  border: 5px solid #4caf50;
  
  /* Margin - space outside the border */
  margin: 15px;
  
  /* Controls how width/height are calculated */
  box-sizing: border-box;
  
  background: #f9f9f9;
}
```

**HTML Example:**
```html
<div class="box-example">
  This is the content area
</div>
```

### Understanding box-sizing

**Default behavior (`content-box`):**
- Width/height only apply to content
- Total width = width + padding + border + margin
- A 200px wide box with 20px padding becomes 240px wide

**With `border-box`:**
- Width/height include content + padding + border
- Total width = width + margin only
- A 200px wide box stays 200px wide regardless of padding/border

### Practical Example

```css
.card {
  width: 300px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  margin: 1rem auto; /* Centers the card */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;
}
```

This creates a clean card component that's exactly 300px wide including its padding and border.

---

## 3. Positioning & Display Properties

These properties control how elements are positioned and how they interact with other elements.

### Position Property

```html
<div class="position-demo">
  <div class="static">Static (default)</div>
  <div class="relative">Relative</div>
  <div class="absolute">Absolute</div>
  <div class="fixed">Fixed</div>
  <div class="sticky">Sticky</div>
</div>
```

```css
.position-demo {
  position: relative; /* Creates positioning context */
  height: 400px;
  border: 2px solid #ccc;
}

.static { 
  position: static; /* Default - follows normal document flow */
  background: #e3f2fd;
}

.relative { 
  position: relative; 
  top: 10px;    /* Moves 10px down from normal position */
  left: 10px;   /* Moves 10px right from normal position */
  background: #f3e5f5;
}

.absolute { 
  position: absolute; 
  top: 30px;    /* 30px from top of nearest positioned parent */
  left: 30px;   /* 30px from left of nearest positioned parent */
  background: #e8f5e8;
}

.fixed { 
  position: fixed; 
  top: 0;       /* Sticks to top of viewport */
  right: 0;     /* Sticks to right of viewport */
  background: #fff3e0;
  padding: 10px;
}

.sticky { 
  position: sticky; 
  top: 20px;    /* Becomes fixed when 20px from top while scrolling */
  background: #fce4ec;
}
```

**Key differences:**
- **Static**: Normal flow (default)
- **Relative**: Moved relative to its normal position, still takes up original space
- **Absolute**: Removed from normal flow, positioned relative to nearest positioned parent
- **Fixed**: Positioned relative to viewport, stays in place when scrolling
- **Sticky**: Toggles between relative and fixed based on scroll position

### Display Property

```css
.block-example { 
  display: block; 
  width: 100%;
  background: #e3f2fd;
  padding: 10px;
  margin: 5px 0;
}

.inline-example { 
  display: inline; 
  background: #f3e5f5;
  padding: 5px; /* Note: top/bottom padding doesn't affect layout */
}

.inline-block-example { 
  display: inline-block; 
  width: 150px;
  height: 50px;
  background: #e8f5e8;
  vertical-align: top;
  margin: 5px;
}

.none-example { 
  display: none; /* Completely removes element from layout */
}

.hidden-example {
  visibility: hidden; /* Hides element but keeps its space */
}
```

**Understanding display values:**
- **Block**: Takes full width, starts on new line (like `<div>`, `<p>`)
- **Inline**: Only takes necessary width, flows with text (like `<span>`, `<a>`)
- **Inline-block**: Combines both - flows inline but can have width/height
- **None**: Element disappears completely
- **Flex/Grid**: Special layout modes (covered next)

---

## 4. Flexbox Layout

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

### Basic Flexbox Setup

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2 with more content</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  
  /* Main axis alignment (horizontal by default) */
  justify-content: space-between;
  
  /* Cross axis alignment (vertical by default) */
  align-items: center;
  
  /* Space between items */
  gap: 20px;
  
  /* Container styling */
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.flex-item {
  background: #007bff;
  color: white;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}
```

### Flex Properties Explained

```css
.flex-container {
  display: flex;
  
  /* Direction of main axis */
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  
  /* Whether items wrap to new lines */
  flex-wrap: nowrap; /* nowrap, wrap, wrap-reverse */
  
  /* Alignment along main axis */
  justify-content: flex-start; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
  
  /* Alignment along cross axis */
  align-items: stretch; /* stretch, flex-start, flex-end, center, baseline */
  
  /* Alignment of wrapped lines */
  align-content: flex-start;
}

.flex-item {
  /* How much item should grow */
  flex-grow: 0;
  
  /* How much item should shrink */
  flex-shrink: 1;
  
  /* Initial size before growing/shrinking */
  flex-basis: auto;
  
  /* Shorthand: flex: grow shrink basis */
  flex: 1; /* This item will grow to fill available space */
  
  /* Individual cross-axis alignment */
  align-self: center;
}
```

### Practical Flexbox Examples

**Navigation Bar:**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
}

.logo {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

**Card Layout:**
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  flex: 0 0 300px; /* Don't grow, don't shrink, 300px base width */
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### CSS Grid Layout

Grid is a two-dimensional layout system for creating complex layouts.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
.grid-container {
  display: grid;
  
  /* Define columns */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  /* Alternative: grid-template-columns: 200px 1fr 100px; */
  
  /* Define rows */
  grid-template-rows: auto auto;
  
  /* Gap between items */
  gap: 20px;
  
  /* Container styling */
  padding: 20px;
  background: #f8f9fa;
}

.grid-item {
  background: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

/* Advanced grid positioning */
.featured-item {
  grid-column: span 2; /* Takes up 2 columns */
  grid-row: span 2;    /* Takes up 2 rows */
}
```

### Complex Grid Layout Example

```css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

---

## 5. Responsive Design

Responsive design ensures your website looks good on all device sizes.

### Flexible Units

```css
.responsive-container {
  /* Relative to parent */
  width: 80%;          /* 80% of parent width */
  max-width: 1200px;   /* Never wider than 1200px */
  
  /* Relative to font size */
  padding: 2rem;       /* 2 times root font size */
  font-size: 1.2em;    /* 1.2 times parent font size */
  
  /* Relative to viewport */
  height: 50vh;        /* 50% of viewport height */
  margin: 5vw auto;    /* 5% of viewport width on sides */
  
  /* Fixed unit for small details */
  border: 1px solid #ddd;
}
```

**Unit Guide:**
- **px**: Fixed pixels
- **%**: Percentage of parent
- **em**: Relative to parent's font size
- **rem**: Relative to root font size
- **vh/vw**: Percentage of viewport height/width
- **vmin/vmax**: Percentage of smaller/larger viewport dimension

### Media Queries

Media queries apply different styles based on device characteristics.

```css
/* Base styles for all devices */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

/* Tablet styles */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
  
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .hide-on-tablet {
    display: none;
  }
}

/* Mobile styles */
@media (max-width: 480px) {
  .container {
    width: 95%;
    padding: 1rem;
    font-size: 0.9rem;
  }
  
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stack-on-mobile {
    flex-direction: column;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .container {
    padding: 3rem;
  }
  
  .grid-layout {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

### Mobile-First Approach

```css
/* Start with mobile styles */
.navigation {
  flex-direction: column;
  background: #333;
  padding: 1rem;
}

/* Then add tablet styles */
@media (min-width: 768px) {
  .navigation {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
}

/* Finally desktop styles */
@media (min-width: 1024px) {
  .navigation {
    padding: 1rem 3rem;
  }
}
```

---

## 6. Animations & Transitions

CSS animations bring your website to life with smooth, engaging motion.

### CSS Transitions

Transitions create smooth changes between different states.

```css
.button {
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  /* Transition all properties over 0.3 seconds */
  transition: all 0.3s ease;
  
  /* Or be specific about what transitions */
  /* transition: background-color 0.3s ease, transform 0.2s ease; */
}

.button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### CSS Animations with Keyframes

Keyframes define complex multi-step animations.

```css
/* Define the animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Apply animations */
.fade-in-element {
  animation: fadeInUp 0.8s ease-out;
}

.pulse-element {
  animation: pulse 2s infinite;
}

/* Multiple animations */
.complex-animation {
  animation: 
    fadeInUp 0.8s ease-out,
    pulse 2s infinite 0.8s; /* Starts after 0.8s delay */
}
```

### Animation Properties Explained

```css
.animated-element {
  animation-name: fadeInUp;           /* Which @keyframes to use */
  animation-duration: 1s;             /* How long the animation takes */
  animation-timing-function: ease-out; /* Speed curve */
  animation-delay: 0.2s;              /* Wait before starting */
  animation-iteration-count: infinite; /* How many times (or infinite) */
  animation-direction: alternate;      /* normal, reverse, alternate */
  animation-fill-mode: forwards;       /* What values to apply when not running */
  animation-play-state: running;       /* running or paused */
  
  /* Shorthand */
  animation: fadeInUp 1s ease-out 0.2s infinite alternate forwards;
}
```

### Practical Animation Examples

**Loading Spinner:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

**Hover Card Effect:**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

### Performance Tips

```css
/* Use efficient selectors */
.good { /* class selector - fast */ }
#good { /* id selector - fast */ }
div { /* element selector - ok */ }

/* Avoid expensive selectors */
.bad * { /* universal selector - slow */ }
.bad > * { /* child combinator - slow */ }
.bad .deeply .nested .selector { /* overly specific - slow */ }

/* Optimize animations */
.smooth-animation {
  /* Animate transform and opacity for best performance */
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  /* Avoid animating these properties */
  /* transition: width 0.3s ease; // causes layout recalculation */
  /* transition: height 0.3s ease; // causes layout recalculation */
}
```

---

Remember: CSS is learned by doing! Start with simple styles and gradually add complexity as you become more comfortable with each concept.