# TO-DO-WITH-REACT-VITEJS
## Creation of web application with the React library created from Vite JS

## Steps to create an App with [Vite](https://vitejs.dev/guide/) + React:

### 1. Project creation with the vite js tool
    npm create vite
### 1.1 If it is the first time 
    - You must type (Y) and accept
    - Assign Project Name and accept
    - Choose Framework and accept, in this case it will be (React)
    - Choose the variant and accept, in this case React with Js or just React
### 2. Install the dependencies of this project that come from node
    npm install
### 3. Construction the project
    npm run build
### 4. Project execution
    npm run dev
### 5. Access the route shown in the console
    http://localhost:5173/

## Useful commands:

### 1. Command to create React structure template
    rfce

## Steps to install [Tailwind](https://tailwindcss.com/docs/guides/vite) with Vite:

### 1. Install Tailwind CSS. Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.cjs` and `postcss.config.cjs`.
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
### 2. Configure your template paths. Add the paths to all of your template files in your `tailwind.config.cjs` file.
    module.exports = {
        content: [
            "./index.html",
            "./src/**/*.{js,ts, jsx,tsx}",
        ],
        \theme: {
            extend: {},
        },
        plugins: [],
    }
### 3. Add the Tailwind directives to your CSS. Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Steps to install [React Icons](https://react-icons.github.io/react-icons/) with Vite:

### 1. Installation (for standard modern project)
    npm install react-icons --save
## 2. Usage ej:
    import { FaBeer } from 'react-icons/fa';

    class Question extends React.Component {
        render() {
            return <h3> Lets go for a <FaBeer />? </h3>
        }
    }

## Steps for the deployment of the App (TO DO) in [GitHub Pages](https://pages.github.com/):

### 1. Creating a new [github](https://github.com/new) repository
### 2. Upload the local project to the newly created github repository
    git init
    git add .
    git commit -m 'First Commit'
    git remote add origin git@github.com:Georgeh30/TO-DO-WITH-REACT-VITEJS.git
    git push origin master
### 3. Install [gh pages](https://www.npmjs.com/package/gh-pages), which will help us to display static files that are already configured
    npm install gh-pages --save-dev
### 4. Agregar la propiedad `deploy` dentro del objeto de la propiedad `scripts` en el archivo `package.json`
    "scripts": {
        "deploy": "gh-pages -d build"
    }
### 5. With the help of the [Vite gh pages](https://vitejs.dev/guide/static-deploy.html#github-pages) documentation, create the `base` property with a value between slashes the name of the project's github repository, adding it inside the object inside `default defineConfig`
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
        plugins: [react()],
        base: '/TO-DO-WITH-REACT-VITEJS/'
    })
### 6. Creation of `deploy.sh` file in the root of the project, copying the code that gives us the documentation of [Vite gh pages](https://vitejs.dev/guide/static-deploy.html#github-pages), pasting it into the newly created file and uncommenting the `git push` line that corresponds to the deployment type, changing `<USERNAME>/<REPO>` to the username and name of the github repository, `eg: Georgeh30/TO-DO-WITH-REACT-VITEJS`
    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd dist

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git checkout -b main
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

    # if you are deploying to https://<USERNAME>.github.io/<REPO>
    git push -f git@github.com:Georgeh30/TO-DO-WITH-REACT-VITEJS.git main:gh-pages

    cd -

### 7. Build static files for application deployment
    npm run build
### 8. We publish the project [TO-DO-WITH-REACT-VITEJS](https://Georgeh30.github.io/TO-DO-WITH-REACT-VITEJS/) in GitHub Page by executing the following command
    npm run deploy
