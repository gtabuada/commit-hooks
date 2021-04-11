# Commit Hooks v1
### Quickly add heavily opinionated Git commit hooks to your repository.
![Commit Hooks - Practical demonstration](https://i.imgur.com/igRO2VX.gif)

### Usage

Run the following command in a project that was already intialized with `git init` and has a package.json file in it's root directory:

```bash
npx commit-hooks
```

That's all! For demonstration, [see the repository commit messages].

---
### About this project


This ~~package~~ script will install the development-only package [Devmoji] and write the required configuration and git hook files. Its purpose is to serve as a single command that will give you some commit validation without any configuration.

Currently (v1), it only adds a *pre-commit* hook which ensures [conventional commit messages] and decorate the messages with a set of emojis mapped from [Gitmoji] and some personal choices. There are plans for adding *pre-commit* linting & formatting (ESLint,  Prettier) hooks and other config options in the near future. [See here for a list of planned features](#future-additionsimprovements).

### Why `.cz-config.js` if there is no commitizen support (yet)?

I got used to managing git-repository tasks in VSCode's source control GUI. This [handy VSCode extension] together with [Devmoji]'s validation, covers all the functionality that commitizen brings with its cli, but is **100% compatible** with VSCode's source control, unlike commitizen. The extension uses either a default config or a cz config file, so I wrote this file to add a handful of useful commit patterns to increment the defaults.

Despite liking to type git commands out in the console, this graphical workflow feels more comfortable to me. 

---

**Warning:** Do not install *(npm install/yarn add)* this locally! This is a *one-time-run* script, not a complete package. Its contents will sit as dead code in your project. 

**Disclaimer:** this package was designed for my personal use, meaning that despite its configuration being easily customizable, the defaults are heavily opinionated. It's also worth noting that there are no plans for maintaining it, providing updates, fixing bugs (non-breaking) or improving performance. You're free to fork and improve as you wish.

---
### Future additions/improvements:
 - (hook) pre-commit linting
 - option to uninstall hooks & configs
 - optionally disable emoji decoration, instead use commitizen for validation

[Devmoji]:https://www.npmjs.com/package/devmoji
[conventional commit messages]:https://www.conventionalcommits.org/en/v1.0.0/#summary
[Gitmoji]:https://gitmoji.dev/
[see the repository commit messages]:https://github.com/ua-lock/commit-hooks/commits/master
[handy VSCode extension]:https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen