# Download


## Git

### git

> for [Windows/linux/mac](https://git-scm.com/downloads)



### NVM

> for [Windows](https://github.com/coreybutler/nvm-windows/releases)

> for [macOS/Linux](https://github.com/nvm-sh/nvm#install--update-script)

```bash
install with curl
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
 source ~/.bashrc
 //check version nodeJS
     nvm list-remote

 
```

### yarn

> [Download](https://yarnpkg.com/en/docs/install)

### VS Code

> [Download](https://code.visualstudio.com/download)

# Install Node.js

```
$ nvm install 12.10
```
or
```
$ nvm install stable
```

# Config

### Eslint

### Install eslint config to project

```
$ yarn add --dev eslint-config-nss
```

### Create `.eslintrc` and add config

```
{
  "extends": "nss/node"
}
```

### Enable `eslint.autoFixOnSave` in VSCode setting