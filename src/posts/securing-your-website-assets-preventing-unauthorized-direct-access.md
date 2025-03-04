---
tags: 
    - Content security
    - web development
title: "Securing Your Website Assets: Preventing Unauthorized Direct Access 🚀🔒"
date: "2025-03-04T10:00:00.1Z"
description: "To prevent direct access to assets via URL on your website, there are multiple approaches depending on setup."
layout: "posts.11ty.js"
---
To prevent direct access to assets via URL on your website, there are multiple approaches depending on setup.

## 1. Restrict Direct Access via .htaccess (For apache)

In Apache server, use `.htaccess` to block direct access to specific file type

```
<FileMatch "\.(jpg|png|pdf|mp4)$">
	Required all denied
</FileMatch>
```

OR Restrict access to only your domain

```
<Filematch "\.(jpg|png|pdf|mp4)$">
	Require all granted
	Require host yourwebsite.com
</Filematch>
```

## 2. Restrict Direct Access in Nginx

```
location ~* \.(jpg|png|pdf|mp4)$ {
	deny all;
}
```

OR Allow access from your domain

```json
location ~* \.(jpg|png|pdf|mp4)$ {
	valid_referer none blocked yourwebsite.com
	if($invalid_referer) {
		return 403;
	}
}
```

## 3. Use signed URLs (For Cloud storage)

If you’re storing assets in **AWS S3, Google Cloud Storage, or similar,** you can generate signed **URLs** that expire after a certain period. 

## 4. Serve assets via Backend

Instead of exposing the assets directly, sever them via backend API:

Example in express js

```jsx
app.get('/protected-assets/:filename', auth, (req, res) => {
	const filePath = path.join(__dirname, 'private-assets', req.params.filename)
	res.sendFile(filePath)
})
```

## 5. Disable directory listing

Ensure that directory listing is disabled to prevent users from browsing your assets folder:

```jsx
Options -Indexes // .htaccess file for Apache

autoindex off; // for nginx 
```

## 6. Use content security policy (CSP)

Restrict asset loading to your domain using CSP in your HTTP headers:

```jsx
Content-Security-Policy: default-src 'self';
```
