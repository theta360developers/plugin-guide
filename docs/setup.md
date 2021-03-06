# SDK Setup

## Android SDK Installation

This section will walk you through the steps to setup your RICOH THETA V development environment, including Android SDK installation, downloading Android Studio, and importing the Ricoh Plugin SDK and Updating the Android Build System.

This community guide has been tested with the Android SDK 3.0.1 and 3.1.1 on Windows 10 (1709) 64bit, Ubuntu 17.10, and macOS High Sierra Version 10.13.4.

## 1 Download Android Studio

Download Android Studio here:

[https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)

![](img/setup/android-studio-download.png)
![](img/setup/android-studio-version.png)

## 2 Import Ricoh Plugin SDK and Update Android Build System

Download the Ricoh Plugin SDK here:

[https://github.com/ricohapi/theta-plugin-sdk](https://github.com/ricohapi/theta-plugin-sdk)
    
### 2.1 Import Project

If you've just installed Android Studio, you may choose Import project from the Welcome to Android Studio start up screen:

![](img/setup/androidstudio-startup-selection.jpg)

Otherwise, use the menus. Import Project from File -> New -> Import Project.

![](img/setup/import-project.png)

You will see the following status bar for a few minutes.

![](img/setup/building.jpg)

### 2.2 Security Updates

After the process completes, you will see a Windows Security Alert.

![](img/setup/firewall-allow.png)

Allow access to the OpenJDK Platform.

### 2.3 Update Build Tools

You may need to update your Build Tools or Install missing platforms and sync project. 

![](img/setup/missing-platform.jpg)

Accept the license terms for 26.0.3 and press Next.

![](img/setup/license-agreement.png)

The components will be installed for you.

![](img/setup/component-installer.png)

Allow Gradle enough time to resync your project.

![](img/setup/gradle-sync.png)

### 2.4 Update Gradle

Although not necessary, you can update Gradle here.

![](img/setup/gradle-update.png)


## 3 Build the APK

You can now inspect your Project in the navigation area.

![](img/setup/inspect.jpg)

Build your APK.

![](img/setup/build.jpg)

At the bottom of the Android Studio window, you will see the status of the build.

![](img/setup/build-status.png)

### 3.1 Locate the APK

Click on the status bar to show your Event Log and locate the APK `plugin-debug.apk`. You'll need to know this information to install the APK into your RICOH THETA camera.

![](img/setup/build-locate.png)

![](img/setup/plugin-find-apk.png)

This concludes the SDK Setup section. Congratulations!
