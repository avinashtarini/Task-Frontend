# Task: Full Stack Task Manager App with Authentication (React Native + Node js)

## Steps to run code

> 1.  open terminal and move to current code directory
> 2.  run npm install to install all dependencies
> 3.  run npm start to start project
> 4.  In the terminal you will be prompted with a QR Code.
> 5.  Download and install Expo Go application in your respective mobile devices and scan this QR. Then app will run on your mobile.

## Folder Structure

```
├── App.js
├── README.md
├── app.json
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── assets
    │   ├── logo.png
    │   └── no_data.jpg
    ├── components
    │   ├── Button.js
    │   ├── FloatingInput.js
    │   ├── Header.js
    │   ├── NoData.js
    │   ├── Spinner.js
    │   ├── Task.js
    │   ├── Text.js
    │   └── Toast.js
    ├── navigation
    │   ├── HomeStack.js
    │   ├── LoginStack.js
    │   └── Navigation.js
    ├── redux
    │   ├── appSlice.js
    │   └── store.js
    ├── screens
    │   ├── CreateEditTask
    │   │   ├── Component.js
    │   │   ├── Container.js
    │   │   └── Styles.js
    │   ├── Home
    │   │   ├── Component.js
    │   │   ├── Container.js
    │   │   └── Styles.js
    │   ├── Login
    │   │   ├── Component.js
    │   │   ├── Container.js
    │   │   └── Styles.js
    │   ├── SignUp
    │   │   ├── Component.js
    │   │   ├── Container.js
    │   │   └── Styles.js
    │   └── TaskDetails
    │       ├── Component.js
    │       ├── Container.js
    │       └── Styles.js
    ├── services
    │   ├── apiConsts.js
    │   ├── fetchWithoutToken.js
    │   └── useFetchDataWithToken.js
    ├── theme
    │   ├── styles.js
    │   └── themes.js
    └── utils
        ├── asyncStorage.js
        ├── constants.js
        ├── helpers.js
        ├── useDispatchUserDetails.js
        └── useUserLogout.js
```

## Packages Used

> "@react-native-async-storage/async-storage": "^1.23.1"  
> "@react-navigation/native": "^7.0.15",  
> "@react-navigation/native-stack": "^7.2.1",  
> "@reduxjs/toolkit": "^2.6.0",  
> "expo": "~52.0.37",  
> "expo-status-bar": "~2.0.1",  
> "react": "18.3.1",  
> "react-native": "0.76.7",  
> "react-native-paper": "^5.13.1",  
> "react-native-safe-area-context": "4.12.0",  
> "react-native-screens": "~4.4.0",  
> "react-redux": "^9.2.0"
