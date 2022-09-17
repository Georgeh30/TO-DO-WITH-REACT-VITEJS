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

