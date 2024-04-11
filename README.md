# React + TypeScript + Vite

-cd client
-npm install
-npm run dev


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

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
```![Capture d’écran 2024-04-09 145710](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/fa734e44-0394-4a71-ad48-15b8d61fd685)
![Capture d’écran 2024-03-24 141331](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/63cde882-37dd-4377-b46a-5b2c4a7a32b7)
![blog4](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/11af56b3-0db7-47e5-8dca-8f487372c2d1)
![usecontext](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/11bc7dd6-5a38-4e7f-a04e-73d86b767b02)
![Capture d’écran 2024-04-11 154041](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/39877362-0e01-4082-a1e3-44384c58da69)
![Capture d’écran 2024-04-11 153955](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/a484504b-fb95-4b42-95d3-c0a4f8abef56)

![Capture d’écran 2024-04-11 153955](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/6879c68c-303e-4edb-b12b-03079ba4f8ea)
![Capture d’écran 2024-04-09 145710](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/0a51fdf5-216c-4dc9-9cc6-08d41340ba43)
![Capture d’écran 2024-03-24 141331](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/ab17c511-ffcd-4938-8a4d-2380f17d511f)
![blog4](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/cedfe77e-a2d4-469c-9fd9-4425ea85e034)
![usecontext](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/5ff357be-d889-4fec-a1e2-b6d434440a13)
![Capture d’écran 2024-04-11 154041](https://github.com/idrissoufaysal/React-recipie-app/assets/111917792/4cde7d79-8324-4948-a976-673b5dd5a904)


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
