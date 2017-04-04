# :car: Interior

Interior is the design language Automile uses in its' web applications.

## :notebook: Documentation

The documentation can be found at <https://automile.github.io/interior/>. To build the files your locally on your machine, you need [Node.js](https://nodejs.org/) installed on your computer. (Your Node.js version must be 6.0 or higher.) You also need [Jekyll](https://jekyllrb.com/) to build the actuall documentation site (While Jekyll on Windows is not officially supported, it is possible to get Jekyll running on Windows. Special instructions can be found on their [Windows-specific docs page](https://jekyllrb.com/docs/windows/#installation)). It's also recomended to have [Yarn](https://yarnpkg.com/) installed.

Run these commands to set up the documentation:

```
$ git clone https://github.com/Automile/interior
$ cd interior
```

And then:

```
$ yarn install
```

Or:

```
$ npm install
```

Start a server (with Browsersync for live-reload etc), first you need to change a variable in `_config.yml`. Comment out line 5 (baseurl) so you can run the project under localhost, then you can make changes with:

```
$ gulp start
```

Or to just build a new `docs` folder with your changes (make sure the baseurl config is present for the build):

```
$ gulp build
```

**Note** When you build a version of Interior, the build script will generate a new folder in the root called `release-<version>/` (the version number is whatever is specified in package.json) that contains the CSS and JavaScript files you can use in your project.

---

### Creators

**David Paulsson**

- <https://twitter.com/davidpaulsson>
