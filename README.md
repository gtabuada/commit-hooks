# Commit Hooks v1
Quickly add Git hooks to your repository.
---
Usage: 
```bash
npx commit-hooks
```

This ~~package~~ script will install the development-only packages [Husky] and [Devmoji] and write the required configuration and git hook files.

Currently (v1) it only adds a *pre-commit* hook which ensures [conventional commit messages] and decorate the messages with a set of emojis mapped from [Gitmoji] and some personal choices. There are plans for adding *pre-commit* linting & formatting (ESLint,  Prettier) hooks in the near future. 

---

**Warning:** Do not install this locally! This is a *one-time-run* script, not a complete package; it's contents will sit as dead code in your project, even if in development only. All of the heavy work is done by Devmoji & Husky.

**Disclaimer:** this package was designed for personal use only, meaning  that despite it's configuration being easily customizable, the defaults are heavily opinionated. It's also worth noting that there are no plans of maintaining it, providing updates or fixing bugs (non-breaking) or improving performance.

---
### Future additions/improvements:
 - [ ] (hook) pre-commit linting
 - [ ]  optionally disable emoji decoration
 - [ ] ditch Husky, manage hooks manually
 - [ ] gif demonstration in readme

[Devmoji]:https://www.npmjs.com/package/devmoji
[Husky]:https://www.npmjs.com/package/husky
[conventional commit messages]:https://www.conventionalcommits.org/en/v1.0.0/#summary
[Gitmoji]:https://gitmoji.dev/