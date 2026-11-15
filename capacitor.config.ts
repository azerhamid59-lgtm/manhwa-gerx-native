import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.manhwagerx.app',
  appName: 'Manhwa Gerx',
  webDir: 'dist', // سيقرأ الملفات من مجلد dist المحلي
  plugins: {
    EdgeToEdge: {
      backgroundColor: "#000000"
    },
    SystemBars: {
      insetsHandling: "disable"
    },
    SocialLogin: {
      providers: {
        google: true
      }
    }
  }
};

export default config;
