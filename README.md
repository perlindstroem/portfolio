# case2

> portfolio built with nuxtjs and express

* uses mailjet api to send emails from contact form
* uses sunrise-sunset api to get times for sunrise/sunset in order to determine theme
* hosted on [heroku](https://per-portfolio.herokuapp.com/)

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve frontend with hot reload at localhost:3000 - proxies backend calls to localhost:3010
$ npm run dev

# serve backend at localhost:3010 - also serves a frontend but has to be generated 
$ npm run start:backend

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).
