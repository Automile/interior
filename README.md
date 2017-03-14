# :car: Interior

Interior is the design language Automile uses in its' web applications.

## :notebook: Documentation

The documentation can be found at <https://automile.github.io/interior/>. To build the files your locally on your machine, you need [Node.js](https://nodejs.org/) installed on your computer. (Your Node.js version must be 6.0 or higher.) You also need [Jekyll](https://jekyllrb.com/) to build the actuall documentation site. (It's also recomended to have [Yarn](https://yarnpkg.com/) installed)

Run these commands to set up the documentation:

```
$ git clone git@github.com:Automile/interior.git automile-interior
$ cd automile-interior
```

And then:

```
$ yarn install
```

Or:

```
$ npm install
```

Start a server (with Browsersync for live-reload etc) to make edits:

```
$ gulp start
```

Or to just build a new `docs` folder with your changes:

```
$ gulp build
```

**Note** When you build a version of Interior, the build script will generate a new folder in the root called `release-<version>/` (the version number is whatever is specified in package.json) that contains the CSS and JavaScript files you can use in your project.

---

### Creators

**David Paulsson**

- <https://twitter.com/davidpaulsson>