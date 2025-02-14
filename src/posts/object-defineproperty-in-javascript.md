---
tags: 
    - frontend
    - javascript
title: "Object.defineProperty() in JavaScript"
date: "2025-02-14T10:00:00.1Z"
description: "JavaScript provides powerful tools to define and manipulate object properties. One such tool is Object.defineProperty(), which allows developers to control property attributes with precision."
layout: "posts.11ty.js"
---
Javascript provides powerful tools to define and manipulate object properties. One such tool is `Object.defineProperty()`, which allows developers to control property attributes with precision. Whether you want to make a property read-only, writable, or configurable, `Object.defineProperty()` is the perfect tool for you.

Today, we will explore how to use `Object.defineProperty()` to define and control the attributes of an object property. Let's dive in!

---

### Understanding Object.defineProperty()

The `Object.defineProperty()` method allows you to define and configure the attributes of a property on an object. It takes three arguments:

```javascript
Object.defineProperty(object, property, descriptor);
```
- `object`: The object on which the property will be defined.
- `property`: The name of the property being defined.
- `descriptor`: An object that specifies the attributes of the property.

The `descriptor` object has the following properties:

- `value`: The value of the property.
- `writable`: A boolean indicating whether the property can be modified.
- `enumerable`: A boolean indicating whether the property should be enumerable (visible in for...in loops).
- `configurable`: A boolean indicating whether the property can be deleted.
- `get`: A function that will be called when the property is accessed.
- `set`: A function that will be called when the property is set.

---

### Use Cases of Object.defineProperty()

Here are some real-world use cases of `Object.defineProperty()`:

1. **Read-Only Properties:** Define a property as read-only to prevent its modification.

```javascript
const config = {};

Object.defineProperty(config, 'API_URL', {
  value: 'https://api.example.com',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(config.API_URL); // Output: 'https://api.example.com'
config.API_URL = 'https://fake.website.com'; // This will not change the value
console.log(config.API_URL); // Output: 'https://api.example.com'
```

2. **Custom Getters and Setters:** Define custom getter and setter functions for a property.

```javascript
const person = {
  firstName: 'Dhruvang',
  lastName: 'Gajjar',
}

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
})

console.log(person.fullName); // Output: 'Dhruvang Gajjar'
person.fullName = 'Champ Decay';
console.log(person.firstName); // Output: 'Champ'
console.log(person.lastName); // Output: 'Decay'
```

3. **Control Access to Properties:** Define a property as non-enumerable to hide it from for...in loops.

```javascript
const secret = {};

Object.defineProperty(secret, 'password', {
    value: 'secret123',
    enumerable: false,
})

console.log(Object.keys(secret)); // Output: []
```

4. **Control Access to Properties:** Define a property as non-configurable to prevent it from being deleted.

```javascript
class BankAccount {
  constructor(balance) {
    Object.defineProperty(this, "_balance", {
      value: balance,
      writable: true,
      enumerable: false
    });
  }

  deposit(amount) {
    if (amount > 0) this._balance += amount;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.withdraw(200);
console.log(account.getBalance()); // Output: 800
console.log(account._balance); // Undefined (not directly accessible)
```

---

### Conclusion

Use `Object.defineProperty()` when you need: 
- Control the attributes of an object property.
- Define custom getter and setter functions for a property.
- Hide properties from for...in loops.
- Prevent properties from being deleted.

This article has covered the basics of `Object.defineProperty()`. If you have any further questions or need help, please don't hesitate to reach out to me. I'm always happy to help!

Thanks for reading, and happy coding!

