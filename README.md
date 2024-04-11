# vejove
A personal health record app!

## Stack
We are using TailwindCSS, Typescript with Sveltekit, and SQLite. Capacitor is helping us build for both android and iOS.

## Developing

Once you've cloned the project, install dependencies with `npm install` (or `pnpm install` or `yarn`), and then you can start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Developing Full Guide (includes HMR!)

First make sure you have your SDK for android and/or iOS. And if you are using a physical device, make sure 

Steps:
1. (optional) plug in physical device
2. `npm run build`
3. In another terminal, run `npm run dev` and don't close it while you code. This will keep Vite running for HMR.
4. `npx cap sync`
5. `npx cap run android` or `npx cap run ios`
6. Choose your device in the terminal to code on!

Note: `npx cap copy` might be needed between steps 4 and 5 when setting this up.

# Installing Vejove to your device
1. Make sure to comment out the server options in the capacitor.config.ts file as this is only needed for development
2. Plug in your device (optional)
3. `npm run dev-install`
4. Choose your android device. You can now unplug your device and use the app as intended.