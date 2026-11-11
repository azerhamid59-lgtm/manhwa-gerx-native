import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.manhwagerx.app',
  appName: 'Manhwa Gerx',
  webDir: 'dist',
  server: {
    url: 'https://azerhamid59-lgtm.github.io/manhwa_gerx/',
    cleartext: false
  }
};

export default config;
