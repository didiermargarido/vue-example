# Vue Example
See [Configuration Reference](https://cli.vuejs.org/config/).

## Installation
```
vue create project-name
npm install
npm run serve
```

### Lint
```
npm run lint
```

### Build
```
npm run build
```

### Deploy GitHub Pages
1. Create a new local branch in your project and name it "**gh-pages**";
2. Go to github and copy the name of the repository (for eg. "**my-first-project**");
3. Create a new file in root directory of your project and name it "**vue.config.js**";
4. In "**vue.config.js**" file paste the following code:
```
module.exports = {
  publicPath: ‘/my-first-project/’
}
```
5. On **.gitignore** file comment the line "**/dist**";
IMPORTANT!! Before you run the next command make sure you don't commit the **.gitignore** and **vue.config.js**.
6. Run the command: ```git add dist && git commit -m "Initial Dist commit"```;
7. Run the command: ```git subtree push --prefix dist origin gh-pages```;
8. On your github repository click on **Settings** and go to **GitHub Pages** section.
9. Select the "**gh-pages**" branch and click Save.
10. You might have to wait a while to **see the link** until this process is done.
