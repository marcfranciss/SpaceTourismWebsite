**_NOTE:_** Copy and paste these in your bash/terminal to install all dependencies.

# Using npm

```
npm install react-router-dom
npm install @types/react-router-dom
npm install sass --save-dev
```

# Using yarn

```
yarn add react-router-dom
yarn add @types/react-router-dom
```

# Deploying in Github Pages

### Install Deployment Dependencies

You need to install gh-pages for deploying to GitHub Pages:

```
npm install gh-pages --save-dev
```

or

```
yarn add gh-pages --dev
```

### Update package.json Scripts

**Add** deploy scripts to your package.json to build the project and push it to GitHub Pages

```json
{
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
