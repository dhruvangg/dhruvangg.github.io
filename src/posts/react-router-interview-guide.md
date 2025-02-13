---
tags: 
    - featured
    - frontend
    - react
title: "React Router Interview Guide: 20 Must-Know Questions & Answers"
date: "2025-02-13T10:00:00.1Z"
description: "Are you preparing for a React.js interview? One of the most commonly asked topics is React Router, and mastering it can give you a solid edge."
layout: "posts.11ty.js"
---

### **Basic Questions**  

#### **1. What is React Router? Why do we use it?**  
**Answer:**  
React Router is a standard library for routing in React applications. It allows navigation between different components without reloading the page, making it useful for building **single-page applications (SPAs)**.  

---

#### **2. How does React Router differ from traditional navigation methods?**  
**Answer:**  
Traditional navigation reloads the entire page, whereas React Router uses **client-side routing**, updating only the required parts of the UI, making navigation faster and smoother.

---

#### **3. What are the different types of routers in React Router?**  
**Answer:**  
- **BrowserRouter** (uses HTML5 history API)  
- **HashRouter** (uses URL hash for routing, e.g., `/#/about`)  
- **MemoryRouter** (keeps the history in memory, used in tests)  
- **StaticRouter** (used for server-side rendering)  

---

#### **4. What is the difference between `<BrowserRouter>` and `<HashRouter>`?**  
**Answer:**  
- **BrowserRouter**: Uses clean URLs (`/about`, `/contact`). Requires server-side configuration to handle routes.  
- **HashRouter**: Uses `#` in URLs (`/#/about`). Works without server configuration but is less SEO-friendly.  

---

#### **5. How do you define a basic route in React Router?**  
**Answer:**  
You define routes using `<Route>` inside `<Routes>`:  

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

---

### **Intermediate Questions**  

#### **6. How do you create nested routes in React Router?**  
**Answer:**  
Use the `<Outlet>` component in a parent route:

```jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* This renders child routes */}
    </div>
  );
}

function Stats() {
  return <h3>Stats Page</h3>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

Navigating to `/dashboard/stats` will render the `Stats` component inside `Dashboard`.

---

#### **7. What is the purpose of `useParams`?**  
**Answer:**  
`useParams` extracts dynamic route parameters.

```jsx
import { useParams } from "react-router-dom";

function User() {
  let { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

If the route is `/user/5`, it will display `User ID: 5`.

---

#### **8. How do you navigate programmatically in React Router?**  
**Answer:**  
Use `useNavigate` hook:  

```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go to About</button>;
}
```

---

#### **9. What is the difference between `<Link>` and `<NavLink>`?**  
**Answer:**  
- **`<Link>`**: Used for navigation without reloading the page.  
- **`<NavLink>`**: Works like `<Link>` but applies an `active` class when the link matches the current route.

Example:  
```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
  About
</NavLink>
```

---

#### **10. What are dynamic routes, and how do you define them?**  
**Answer:**  
Dynamic routes contain parameters:

```jsx
<Route path="/product/:id" element={<Product />} />
```

---

#### **11. What is `useNavigate`, and how does it differ from `useHistory`?**  
**Answer:**  
- `useNavigate` (React Router v6) replaces `useHistory` from v5.  
- Instead of `.push()`, we use `.navigate()`:  

```jsx
const navigate = useNavigate();
navigate("/home");
```

---

#### **12. How do you handle 404 pages?**  
**Answer:**  
Use a wildcard `*` route:

```jsx
<Route path="*" element={<NotFound />} />
```

---

### **Advanced Questions**  

#### **13. How do you handle route protection?**  
**Answer:**  
Wrap protected routes in an authentication check:  

```jsx
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // Example check
  return isAuthenticated ? children : <Navigate to="/login" />;
}

<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

#### **14. What is lazy loading in React Router?**  
**Answer:**  
Lazy loading optimizes performance by loading components only when needed.

```jsx
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

<Route path="/about" element={
  <Suspense fallback={<div>Loading...</div>}>
    <About />
  </Suspense>
} />
```

---

#### **15. What are the differences in React Router v6 vs. older versions?**  
**Answer:**  
- **No more `Switch`**, replaced with `Routes`.  
- **`useNavigate` replaces `useHistory`**.  
- **Routes require an `element` prop** (not `component`).  
- **Relative routing is improved**.  

---

#### **16. How can you pass state between routes?**  
**Answer:**  
Use the `state` prop in `navigate`:  

```jsx
navigate("/details", { state: { userId: 5 } });
```

Retrieve it in the target component:

```jsx
const location = useLocation();
console.log(location.state.userId);
```

---

#### **17. How do you persist navigation state across refreshes?**  
**Answer:**  
Store data in **localStorage** or **Redux**.

```js
localStorage.setItem("user", JSON.stringify(userData));
const user = JSON.parse(localStorage.getItem("user"));
```

---

#### **18. What is the difference between `Outlet` and Layout routes?**  
**Answer:**  
- **`Outlet`** is used to render child components in nested routes.  
- **Layout Routes** allow shared layouts.

Example:

```jsx
function Layout() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

<Route path="/" element={<Layout />}>
  <Route path="home" element={<Home />} />
</Route>
```

---

#### **19. How can you implement scroll restoration when navigating?**  
**Answer:**  
Use `useEffect` to scroll to the top:

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}
```

Use it inside `BrowserRouter`:

```jsx
<BrowserRouter>
  <ScrollToTop />
  <Routes>{/* Routes here */}</Routes>
</BrowserRouter>
```

---

#### **20. How do you handle query parameters?**  
**Answer:**  
Use `useSearchParams`:

```jsx
const [searchParams] = useSearchParams();
console.log(searchParams.get("id"));
```
