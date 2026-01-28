---
layout: posts.11ty.js
title: "Day 1: What AWS Lambda Actually Is (and Isn't)"
date: 2026-01-28T19:43:00.000+05:30
description: Why Lambda is not an Express endpoint
tags: []
---

## The Core Mental Shift

You’re thinking:

> Lambda = Express endpoint
> 

Reality is closer to:

> Lambda = Array.prototype.map() callback
> 

Sounds weird — stay with me.

---

## Why Lambda is *not* an Express endpoint

### Express mental model (what you know well)

- Server is **always running**
- Memory is **always there**
- You control:
    - startup
    - routing
    - middleware
- Requests are handled **inside your app**

```jsx
app.get('/users', (req, res) => {
  // server already alive
});
```

**The server exists *before* the request.**

---

### Lambda mental model (what actually happens)

- No server is running
- AWS waits for an **event**
- When event happens:
    - AWS spins up a runtime
    - runs **one function**
    - freezes or destroys it

```jsx
exports.handler = async (event) => {
  // this function exists ONLY because an event happened
};
```

No event → no code → no process.

---

## 💡 Bulb-On Moment #1

> In Express, requests go into your server.In Lambda, your function exists because of the request.
> 

That inversion is everything.

---

## Think in “Invocation”, not “Requests”

In Express:

- You handle **many requests**
- Inside **one long-living process**

In Lambda:

- Each invocation is:
    - isolated
    - time-limited
    - event-scoped

AWS thinks like this:

> “Something happened → run this function → forget about it.”
> 

---

## The Event is NOT just HTTP

This is another silent trap.

An Express endpoint only understands HTTP.

A Lambda function can be triggered by:

- HTTP (API Gateway)
- File upload (S3)
- Message (SQS)
- Cron (EventBridge)
- DB change (DynamoDB streams)

Same function signature:

```jsx
exports.handler = async (event) => {}
```

Different *meaning* of `event`.

---

## 💡 Bulb-On Moment #2

> HTTP is just one of many possible events.Lambda doesn’t care about REST — AWS services do.
> 

Lambda is infrastructure glue, not “API code”.

---

## Where routing *really* lives

In Express:

```jsx
app.get('/users')
app.get('/orders')
```

In Lambda world:

- `/users` → **usersLambda**
- `/orders` → **ordersLambda**

Routing moves from:

> Code → Infrastructure
> 

This is why Lambda apps feel “fragmented” at first.

## Why Lambda feels magical in this case

Let’s contrast:

### Express backend (even a small one)

- Server must exist 24/7
- Memory allocated even when idle
- You think: *“Is my backend up?”*

### Lambda in your scenario

- No idle time
- No “backend up/down”
- Code exists only when work exists

That’s why Lambda shines when:

- traffic is irregular
- workload is bursty
- backend is *not the product*

---

## The hidden rule you accidentally followed

You didn’t build:

- sessions
- background loops
- stateful processes

You built:

- **tasks**

That’s the Lambda-native style.

---

## One-line definition

> AWS Lambda is best thought of as a managed task runner triggered by events.
> 

Not a server. Not an app. A **reaction engine**.
