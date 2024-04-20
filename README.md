# WEB3 MOBILE APP - Artivist

This guide is intended to assist beginners in configuring and running the WEB3 MOBILE APP project in a Mac environment, detailing each necessary step for an effective setup.

## Dependencies

```bash
npm i 
```
## Build

To build the application:

### APK 
```bash
eas build -p android --profile preview
```

## Running Locally

To run the application locally:

### Using Tunnel

```bash
npx expo start --tunnel -c
```

### Locally

```bash
npx expo start -c

```