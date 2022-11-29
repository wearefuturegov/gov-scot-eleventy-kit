# GOV.UK Eleventy starter kit

This is a basic [11ty](https://www.11ty.dev/) website that includes everything from [Digital Scotland Frontend](https://designsystem.gov.scot/).

You can copy and paste code samples straight from the [Digital scotland design system](https://designsystem.gov.scot/).

It should be great for prototypes, but might also be suitable for some small, simple production services as well.

A good reference is the [gov.scot design system website](https://github.com/scottishgovernment/designsystem.gov.scot) - especially for images etc that might be missing!

## 🤺 Installation

```sh
npm install
npm run start
```

![](screenshot.png)

## 🧠 Anatomy

The main folder is `/pages` where HTML pages live.

Layouts are in the `/_includes` subfolder. Choose which layout you want to use by changing the lines at the top of the files:

```
---
title: My first page
layout: default
---
```

You can copy and paste code samples from the GOV.UK design system into these.

Other folders you might see:

- `/assets` images and font files needed by the site live in here
- `/javascript` you can write custom JavaScript in here
- `/styles` you can style your website using SCSS here

## 👩‍💻 Using it

**[Open it in CodeSandbox](https://githubbox.com/wearefuturegov/gov-uk-eleventy-kit)**

You need [node.js](https://nodejs.org/en/download/) installed for this to work.

Check if you have it by running `node -v` in your terminal.

If you do, run these commands:

```
npm install
npm run dev
```

It should be available in your browser at `http://localhost:8080`.

## 🛰 Putting it on the web

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=github.com/wearefuturegov/gov-uk-eleventy-kit)

If you run `npm run build` in your terminal, it will build a set of HTML webpages to the `/_site` folder that are ready to publish on the web.

It's suitable for any static file host, like [Netlify](https://www.netlify.com/).

Netlify brings lots of handy enhancements, such as quick [forms](https://docs.netlify.com/forms/setup/). You'll struggle to make multi-page forms - [a GOV.UK staple](https://designnotes.blog.gov.uk/2015/07/03/one-thing-per-page/), this way though.
