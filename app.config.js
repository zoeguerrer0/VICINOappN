import 'dotenv/config';

export default{
  "expo": {
    "name": "VIC",
    "slug": "VIC",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
	extra:{
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		projectID: process.env.PROJECT_ID,
		storageBucket: process.env.STORAGE_BUCKET,
		mesagginSenderId: process.env.MESSAGING_SENDER_ID,
		appId: process.env.APP_ID
	}
  }
}
