# Open Source at Lost Type

The hub for open source projects by [Lost Type](http://losttype.com) contributors.

## Getting started

This project is a simple, static website. Make sure you also have the latest version of Node.js installed by [downloading it here](http://nodejs.org/) (You don’t necessarily need to know anything Node-releated to setup this site.)

Next, open up your terminal and clone this repository:

```sh
# Clone the repo
git clone http://github.com/losttype/opensource.losttype.com/

# Move into the repo folder
cd opensource.losttype.com/
```

Now, you can install the tools that are used to build the site with npm, which came bundled with Node.js:

```sh
# Install dependencies
npm install
```

The main tool this installs is Harp, the static web server with build-in preprocessing. This allows you to work on the site using preprocessors like Sass without having to set them up. To get the project running in your browser, run the following command:

```sh
npm run start
# Now available at http://localhost:9000
```

Now, develop as you’d like! The templates are written using Jade and the CSS is written using Sass, which will both automatically update in the browser upon you refreshing.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Kenneth Ormandy](http://kennethormandy.com) & [The Lost Type Co-op](http://losttype.com)
