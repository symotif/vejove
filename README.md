# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


# Development

## setup
1. clone
2. `npm i`

## running with hot module reloading
1. (optional) plug in android device
2. `npm run build`
3. `npm run dev` in another terminal (you gotta keep this running while you code)
4. `npx cap sync`
5. `npx cap run android`
6. choose your android device

`npx cap copy` might be needed betwwen steps 4 and 5 when setting this up

# production
make sure to delete the server options in the capacitor config, this is only for dev