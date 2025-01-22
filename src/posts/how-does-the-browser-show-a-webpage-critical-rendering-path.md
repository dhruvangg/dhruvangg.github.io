---
tags: 
    - post
title: "How does the browser show a webpage (Critical Rendering Path)?"
date: "2025-01-10"
description: "When you visit a webpage, the browser goes through a series of steps to render it on the screen. Optimizing the Critical Rendering Path is key to improving page load time and user experience."
layout: "posts.11ty.js"
---
The Critical Rendering Path (CRP) refers to the sequence of steps the browser follows to render a webpage from the moment you request it (by typing a URL or clicking a link) to the moment it appears on the screen. Optimizing this path is key to improving web performance.

Here's a breakdown of the Critical Rendering Path:

---

1. Request the Document (HTML)
   - **URL entered → HTTP request:** The browser sends a request for the HTML document to the web server.
   - **Initial response:** The server sends back the HTML file, which starts the rendering process.
2. Parse the HTML
   - **DOM Construction:** The browser starts parsing the HTML document and builds the **DOM (Document Object Model).**
   - The DOM represents the structure and content of the page, such as elements, text, and attributes.
3. Request External Resources
   - **CSS, JavaScript, Images:** As the HTML is parsed, the browser identifies external resources like CSS files, JavaScript, and images. The browser requests these resources, which can block the rendering of the page if they are critical (e.g., CSS required to display content properly).
4. Build the CSSOM (CSS Object Model)
   - The browser parses CSS files (either inline in the HTML or from external resources) to create the CSSOM.
   - The CSSOM represents the styles applied to the HTML elements and determines how elements will be rendered visually.
5. Combine DOM + CSSOM = Render Tree
   - The browser merges the DOM and CSSOM to create the Render Tree.
   - The render tree represents the visual structure of the page, containing only the elements that need to be displayed and their styles.
6. Layout (Reflow)
   - The browser calculates the exact position and size of each element based on the Render Tree.
   - This step is known as layout or reflow. For example, the browser decides where to place the text, images, and buttons on the page.
7. Paint
   - The browser paints the visual elements (e.g., text, images, colors) onto the screen based on the layout.
   - At this stage, the browser draws pixels to render the page.
8. Composite Layers
   - **Compositing:** If the page includes complex elements (e.g., animations, scrollable areas, etc.), the browser splits the page into layers and composites them together to form the final page view.
   - The browser renders and layers these elements efficiently to display a smooth page.
9. JavaScript Execution
   - The browser executes JavaScript code, which can modify the DOM, CSSOM, or trigger additional network requests.
   - If JavaScript is blocking the critical path (e.g., JS that manipulates the DOM), it can delay rendering.
10. Final Rendering
    - Once the layout is complete and the layers are composited, the browser renders the page to the screen, and the user can interact with it.
    - The page is considered fully rendered when all resources (fonts, images, etc.) have loaded.

---

### Optimizing the Critical Rendering Path:

- **Minimize blocking resources:** Load critical CSS and JavaScript early and defer non-essential resources.
- **Inline critical CSS:** To prevent additional HTTP requests.
- **Lazy-load images and scripts:** Load resources that are not immediately visible only when they are needed.
- **Asynchronous JavaScript:** Use async or defer attributes to prevent blocking the rendering process with JavaScript.

---

### Summary of CRP Steps:

1. Request the document
2. Parse HTML (DOM)
3. Request external resources (CSS/JS)
4. Build CSSOM (CSS Object Model)
5. Create Render Tree (DOM + CSSOM)
6. Layout (Reflow)
7. Paint
8. Composite layers
9. Execute JavaScript
10. Final rendering

By focusing on optimizing each step in the Critical Rendering Path, developers can improve page load times, enhance the user experience, and build faster websites.

Let me know if you'd like a deeper dive into any of these steps! 😊
