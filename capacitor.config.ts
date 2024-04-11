import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'vejove',
  webDir: 'build',
  bundledWebRuntime: false,

  // comment out these options below when you are running in production. this is for hmr when developing!
  // server: {
  //   url: 'http://192.168.0.62:5173',
  //   cleartext: true,
  //   //allowNavigation: ['*'],
  //   //androidScheme: 'https'
  // },
};

export default config;
