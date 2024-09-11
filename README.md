# Mobile Testing Documentation

## Table of Contents

1. [Overview](#overview)
2. [Goals](#goals)
3. [Tools Used](#tools-used)
4. [Prerequisites](#prerequisites)
5. [Installation and Setup](#installation-and-setup)
   - [1. Download and Install Java Development Kit (JDK)](#1-download-and-install-java-development-kit-jdk)
   - [2. Install Node.js and NPM](#2-install-nodejs-and-npm)
   - [3. Install Appium](#3-install-appium)
   - [4. Install Android Studio](#4-install-android-studio)
   - [5. Set Up Android Emulator (Android 8.0 Oreo)](#5-set-up-android-emulator-android-80-oreo)
   - [6. Download apiDemos Debug APK](#6-download-apidemos-debug-apk)
   - [7. Install Appium Inspector](#7-install-appium-inspector)
   - [8. Install WebdriverIO (WDIO)](#8-install-webdriverio-wdio)
   - [9. Configure WebdriverIO for Appium](#9-configure-webdriverio-for-appium)
   - [10. Install Chromedriver](#10-install-chromedriver)
   - [11. Running a Sample Test](#11-running-a-sample-test)

---

## [Overview](#overview)

This documentation explains the setup and configuration for a mobile testing environment using **Appium**, **Android Emulator**, **Appium Inspector**, **WebdriverIO (WDIO)**, and **Chromedriver**. The application under test is the **apiDemos debug APK** on an Android 8.0 (Oreo) emulator.

---

## [Goals](#goals)

The objective is to set up a comprehensive mobile testing environment to automate tests for Android applications using **Appium** and **WebdriverIO**.

---

## [Tools Used](#tools-used)

- **Appium**: A mobile automation tool used for testing native, hybrid, and mobile web applications.
- **WebdriverIO (WDIO)**: A JavaScript test automation framework for WebDriver.
- **Appium Inspector**: A GUI-based inspector for mobile applications, used for identifying UI elements.
- **Android Studio Emulator**: An Android emulator for testing Android applications.
- **Chromedriver**: A tool that helps automate web interactions in mobile web views or hybrid applications.
- **apiDemos Debug APK**: A sample app used for testing.

---

## [Prerequisites](#prerequisites)

Before you begin, make sure you have the following:

- **Operating System**: Windows, macOS, or Linux
- **Java Development Kit (JDK)**: Version 11 or higher
- **Node.js and NPM**: Node.js 14.x or higher
- **Android Studio and SDK**: For setting up the emulator and Android development tools
- **Basic Understanding of JavaScript and WebdriverIO**: Knowledge of JavaScript is essential for writing WebdriverIO tests.

---

## [Installation and Setup](#installation-and-setup)

### [1. Download and Install Java Development Kit (JDK)](#1-download-and-install-java-development-kit-jdk)

Appium requires the Java Development Kit (JDK) to interact with Android devices.

1. Download JDK from the [Oracle JDK website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or [AdoptOpenJDK](https://adoptopenjdk.net/).
2. Install the JDK following the instructions for your OS.
3. Set the `JAVA_HOME` environment variable and ensure the path is configured properly.

---

### [2. Install Node.js and NPM](#2-install-nodejs-and-npm)

Node.js and NPM are required for Appium and WebdriverIO.

1. Download the LTS version of Node.js from the [Node.js website](https://nodejs.org/).
2. Run the installer and follow the prompts.
3. Verify the installation by running:

   ```bash
   node -v
   npm -v
   ```

---

### [3. Install Appium](#3-install-appium)

Appium is the core component of mobile testing.

1. Install Appium globally:

   ```bash
   npm install -g appium
   ```

2. Verify the installation:

   ```bash
   appium -v
   ```

---

### [4. Install Android Studio](#4-install-android-studio)

Android Studio is used to set up the emulator and Android SDK.

1. Download and install Android Studio from the [Android Studio website](https://developer.android.com/studio).
2. During installation, ensure that the Android SDK and Virtual Device are also installed.
3. Set up the `ANDROID_HOME` environment variable.

---

### [5. Set Up Android Emulator (Android 8.0 Oreo)](#5-set-up-android-emulator-android-80-oreo)

You will use the Android Studio Emulator for testing.

1. Open the **AVD Manager** in Android Studio and create a new virtual device.
2. Select **Pixel 2** or any other device model.
3. Download and install the **Oreo (API level 26)** system image.
4. Configure the emulator settings, such as RAM, and launch it.

---

### [6. Download apiDemos Debug APK](#6-download-apidemos-debug-apk)

The **apiDemos** APK is the test application.

1. Download the APK from the [Appium sample repository](https://github.com/appium/sample-code/tree/master/sample-code/apps).
2. Save it in a location you can access easily during test setup.

---

### [7. Install Appium Inspector](#7-install-appium-inspector)

Appium Inspector helps in identifying elements in your mobile app.

1. Download Appium Inspector from [here](https://github.com/appium/appium-inspector/releases).
2. Install it and launch the application.

---

### [8. Install WebdriverIO (WDIO)](#8-install-webdriverio-wdio)

WebdriverIO is the framework that will drive your Appium test.

1. Create a new directory for your project.

   ```bash
   mkdir mobile-testing
   cd mobile-testing
   ```

2. Initialize the project:

   ```bash
   npm init -y
   ```

3. Install WebdriverIO:

   ```bash
   npm install @wdio/cli
   ```

4. Run the WDIO configuration wizard:

   ```bash
   npx wdio config
   ```

5. Install dependencies for Appium:

   ```bash
   npm install @wdio/appium-service
   ```

---

### [9. Configure WebdriverIO for Appium](#9-configure-webdriverio-for-appium)

You need to modify the configuration file `wdio.conf.js` to set up the desired capabilities.

1. Open the `wdio.conf.js` file and add the following capabilities:

   ```javascript
   capabilities: [{
     platformName: 'Android',
     platformVersion: '8.0',
     deviceName: 'Pixel_2_API_26',
     app: '/path/to/ApiDemos-debug.apk', // Replace with the actual path
     automationName: 'UiAutomator2'
   }]
   ```

2. Ensure Appium is listed as a service:

   ```javascript
   services: ['appium']
   ```

---

### [10. Install Chromedriver](#10-install-chromedriver)

Chromedriver is needed for testing web views.

1. Install Chromedriver:

   ```bash
   npm install chromedriver
   ```

2. Ensure that the Chromedriver version is compatible with the Chrome version on your Android emulator.

---

### [11. Running a Sample Test](#11-running-a-sample-test)

1. Create a new test file in the `./test/specs/` directory:

   ```javascript
   describe('ApiDemos Test', () => {
     it('should open the app and perform a click', async () => {
       const appButton = await $('~App');
       await appButton.click();

       const actionBar = await $('~Action Bar');
       const isDisplayed = await actionBar.isDisplayed();
       expect(isDisplayed).toBe(true);
     });
   });
   ```

2. Start Appium Server (if not using Appium Service in WebdriverIO):

   ```bash
   appium
   ```

3. Run the test:

   ```bash
   npx wdio run wdio.conf.js
   ```

## Acknowledgments

I would like to extend my thanks to everyone who supported me during this mobile testing workshop. Special appreciation goes to my mentors @Divyang-27
and colleagues @smrithi3 @Vasudhadas for their valuable help and support. Their insights have been crucial in refining my approach and improving the quality of this project. I also want to acknowledge the resources and tools provided by the broader testing community that helped enhance my understanding and skills.

