# Wireless Live Streaming Example

The source code is available on GitHub. 

[https://github.com/ricohapi/theta-wireless-live-streaming-plugin](https://github.com/ricohapi/theta-wireless-live-streaming-plugin)

You may need
to clone the repo with [Git Large File Storage](https://git-lfs.github.com/) 
if you want to download the pre-compiled apk with the repo. This guide
covers working with the source code and compiling it within Android Studio.

Usage of the Wireless Live Streaming plug-in is covered extensively in the 
[Plug-in User Guide](https://community.theta360.guide/t/plug-in-user-guide/3183) 
(free registration to community required).

## Import Project

You do not need to build from source if you want to test the plug-in functionality.
You can go to the THETA Store and download the plug-in for free.

After extracting the files, you will see a standard project structure. If you extracted
from a zipped file, the pre-compiled apk will not work. You must build from source.

![extracted files](/example/img/wireless/extracted.png)

In Android Studio, go to *File -> New -> Import Project...*.

![import project](/example/img/wireless/import.png)

Select the wireless-live-streaming project. I needed to change
the name of the project to a shorter project name.

![select project](/example/img/wireless/select-project.png)

After importing into Android Studio, you will see your project files.

![project files](/example/img/wireless/project-files.png)

## Browse Files

Look into the web server and rtmp libraries that the plug-in
is using.

### NanoHTTPD for web server configuration

One of the more interesting files is the AndroidWebServer that is used for the configuration
of the plug-in through a web browser.

![simplehttpd](/example/img/wireless/simplehttpd.png)

The import statement shows the use of the [NanoHTTPD package](https://github.com/NanoHttpd/nanohttpd) 
that is available on GitHub.

![nanohttpd](/example/img/wireless/nanohttpd.png)

![nano on github](/example/img/wireless/nano-github.png)

By using this technique, you can build a browser-based tool that allows
your users to connect to the camera with a mobile phone or desktop computer.
See the plug-in user guide for more information on this technique.

![configuration gui](/example/img/wireless/web-gui.png)

### rtmp libraries

![rtmp libraries](/example/img/wireless/libraries.png)

- [rtmp-rtsp-stream-client-java](https://github.com/pedroSG94/rtmp-rtsp-stream-client-java) by pedroSG94
- [SimpleRtmp](https://github.com/faucamp/SimpleRtmp) by faucamp

After looking at the file structure, build the package.

## Build

![build](/example/img/wireless/build.png)

Ignore the warning about deprecated API.

![ignore API warning](/example/img/wireless/ignore-deprecated.png)

Focus on the happier *APK(s) generated successfully* message.

![apk compiled](/example/img/wireless/apk-compiled.png)

## Install

Use adb to install the apk.  The command is `adb install app-debug.apk`. 
You can specify by full path of the file on the cmd prompt by dragging the
file from File Explorer onto the Command Prompt.

![install](/example/img/wireless/install.png)

Look for the *Success* status message.

![success](/example/img/wireless/success.png)

## Permissions

I suggest you use Vysor to check the permissions of the plug-in.

Go to settings.

![settings](/example/img/wireless/settings.png)

Go to Apps. Select *Wireless Live Streaming*.

![apps](/example/img/wireless/app.png)

Select *Permissions*.

![permissions](/example/img/wireless/permissions.png)

Set *Camera* and *Microphone* permissions.

![camera and microphone permissions](/example/img/wireless/set-permissions.png)

Note that audio streaming is single channel.
