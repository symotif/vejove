import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'phr',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.200:5173',
    cleartext: true,
    allowNavigation: ['*'],
    //androidScheme: 'https'
  },
};

export default config;
