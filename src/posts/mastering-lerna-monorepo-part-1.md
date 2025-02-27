---
tags: 
    - frontend
    - monorepo
    - web development
    - featured
title: "Lerna Monorepo Interview Questions – Part 1: Must-Know Insights!"
date: "2025-02-27T10:00:00.1Z"
featuredImage: "/images/posts/lerna.png"
description: "Managing multiple packages in a monorepo can be a game-changer for large-scale projects, and Lerna is a popular tool for handling it. "
layout: "posts.11ty.js"
---
### 1. What is lerna, and why is it used in monorepo setup?

Lerna is a tool for managing JavaScript monorepos, allowing multiple packages to exist in the same repository. It helps with dependency management, versioning and publishing, making it easier to develop and maintain projects. 

### 2. How does lerna differ from npm workspaces and yarn workspaces?

- Lerna is a monorepo management tool that provides commands for versioning, running scripts across multiple packages, and publishing.
- npm and yarn workspaces manage dependencies efficiently by hoisting shared dependencies, but they do not provide advanced versioning or publishing feature like lerna
- Lerna can be used with workspaces for better performance.

### 3. What are the key benefits of using lerna in a monorepo?

- Simplified dependency management across packages.
- Improved developer productivity
- Faster build with caching
- Controlled versioning and publishing
- Easier sharing of code between packages.

### 4. What are the main lerna commands, and what do they do?

- `lerna init` → initializes a new lerna monorepo
- `lerna bootstrap` → Installs dependencies and links local packages
- `lerna run <script>` → Runs a script across all packages
- `lerna exec <command>` → Executes a shell command in each package
- `lerna publish` → Publishes updated packages

### 5. What is the difference between “fixed” and “independent” mode in lerna?

- **Fixed mode (default)** → All packages share the same version
- **Independent mode** → Each package has its own versioning. Use `lerna init --independent` to enable independent mode.

### 6. How does lerna handle dependency management between packages?

 Lerna detects local dependencies and link then using symbolic links, avoiding duplicate  installations. It also supports hoisting (moving shared dependencies to the root `node_modules`)

### 7. What is the purpose of `lerna bootstrap` , and when should you use it?

It installs all dependencies and links local package together. Run it after cloning the monorepo or when adding new dependencies.

### 8. How do you publish packages using lerna?

Use `lerna publish` which:

- Determines which packages have changed
- Bumps versions
- Updates package.json
- Creates Git tags and publishes to npm