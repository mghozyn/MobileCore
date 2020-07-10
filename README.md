# AGIT Mobile Core

---

## Folder structure

- android
- ios
- assets
- node_modules
- src
  - actions
    - api
    - reducers
  - components
  - configs
    - colors
    - fonts
    - images
    - strings
    - sizes
  - constants
    - rest
    - redux
  - pages
  - routes
  - utility

## How to run project

_After clone the project you need to install deppendecy with NPM Install in terminal_

```
npm install
```

### Run in Android Platform

If using Android X, run jetifier first

```
npm run android-jetify
```

After jetifier run, you can run in your android device / android simulator

```
npm run android
```

### Run in iOS Platform

Install dependency in ios by using pods

```
npm run ios-cocoapods
```

After pods install, you can run in your iPhone simulator

```
npm run ios
```
