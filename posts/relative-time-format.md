---
title: Relative Time Format
tags: ["javascript", "featured"]
description: Dive into the world of web development as we demystify relative time formatting techniques, enhancing your understanding of time presentation.
featuredImg: {'url': 'relative-time-format.png', width: '400px', height: '400px'}
date: 2022-03-22 05:30:00
---

The relative Time format is often used in social media, blogs, and chat applications. Earlier we have to make some functions to get relative time. Now It can be achievable by Vanilla JavaScript.

> Intl.RelativeTimeFormat() enables localized formatting of relative times without sacrificing performance.


A Quick example
```
  const rtf = new The relative Time format is often used in social media, blogs, and chat applications. Earlier we have to make some functions to get relative time. Now It can be achievable by Vanilla JavaScript.
```

Intl.RelativeTimeFormat() enables localized formatting of relative times without sacrificing performance.


A Quick example
```
  const rtf = new Intl.RelativeTimeFormat('en');
  
  rtf.format(10, 'second'); // 'in 10 seconds'
  
  rtf.format(-10, 'minute'); // '10 minutes ago'
```
The Intl.RelativeTimeFormat() constructor creates Intl.RelativeTimeFormat objects.

Syntax
```
  new Intl.RelativeTimeFormat([locales[, options]])
```  
Parameters
locales [Optional]
A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.

options [Optional]
An object with some or all of the following properties:

localeMatcher The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.

numeric The format of output message. Possible values are: "always" (default, e.g., 1 day ago), or "auto" (e.g., yesterday). The "auto" value allows to not always have to use numeric values in the output.

style The length of the internationalized message. Possible values are: "long" (default, e.g., in 1 month) "short" (e.g., in 1 mo.), or "narrow" (e.g., in 1 mo.). The narrow style could be similar to the short style for some locales.

Here is an example with some option properties:


  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })


  rtf.format(-1, 'day')  // 'yesterday'
  
  rtf.format(0, 'day')   // 'today'
  
  rtf.format(1, 'day')   // 'tomorrow'
  
  rtf.format(-1, 'week') // 'last week'
  
  rtf.format(0, 'week')  // 'this week'
  
  rtf.format(1, 'week')  // 'next week'

Also, This is supported by all modern browsers. You can check compatibility here

References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat

https://v8.dev/features/intl-relativetimeformatIntl.RelativeTimeFormat('en');
  
  
  rtf.format(10, 'second'); // 'in 10 seconds'
  
  rtf.format(-10, 'minute'); // '10 minutes ago'

The Intl.RelativeTimeFormat() constructor creates Intl.RelativeTimeFormat objects.

Syntax

  new Intl.RelativeTimeFormat([locales[, options]])
  
Parameters
locales [Optional]
A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.

options [Optional]
An object with some or all of the following properties:

localeMatcher The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.

numeric The format of output message. Possible values are: "always" (default, e.g., 1 day ago), or "auto" (e.g., yesterday). The "auto" value allows to not always have to use numeric values in the output.

style The length of the internationalized message. Possible values are: "long" (default, e.g., in 1 month) "short" (e.g., in 1 mo.), or "narrow" (e.g., in 1 mo.). The narrow style could be similar to the short style for some locales.

Here is an example with some option properties:


  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })


  rtf.format(-1, 'day')  // 'yesterday'
  
  rtf.format(0, 'day')   // 'today'
  
  rtf.format(1, 'day')   // 'tomorrow'
  
  rtf.format(-1, 'week') // 'last week'
  
  rtf.format(0, 'week')  // 'this week'
  
  rtf.format(1, 'week')  // 'next week'

Also, This is supported by all modern browsers. You can check compatibility here

References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat

https://v8.dev/features/intl-relativetimeformat