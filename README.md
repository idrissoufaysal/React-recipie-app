# React + TypeScript + Vite

-cd client
-npm install
-npm run dev


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOpti![Capture d’écran 2024-04-11 153955](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/03267074-5d49-4a8b-9577-616d2d4a6e53)![Capture d’écran 2024-04-11 154041](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/e70dc023-97ad-4bd0-80f8-25f883c7d0dc)

ons`![Capture d’écran 2024-04-11 154819](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/927bb6da-6335-4edd-a6c4-4d20e8f35630)


```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
