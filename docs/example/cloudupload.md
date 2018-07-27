# File Cloud Upload Example

The source code is available on GitHub. 

[https://github.com/ricohapi/theta-cloud-upload-plugin](https://github.com/ricohapi/theta-cloud-upload-plugin).

You may need
to clone the repo with [Git Large File Storage](https://git-lfs.github.com/)
if you want to download the pre-compiled apk with the repo. This guide
covers working with the source code and compiling it within Android Studio.

Usage of the File Cloud Upload plug-in is covered extensively in the 
[Plug-in User Guide](https://community.theta360.guide/t/plug-in-user-guide/3183) 
(free registration to community required).

## Prerequisites

* understanding of how to import projects into Android Studio. 
If you need a refresher, see the example for the Wireless Live 
Streaming Plug-in
* experience with THETA plug-in. More information is available
in the Plug-in User Guide
* ability to connect your THETA to the Internet in client mode. See
the Plug-in User Guide for more information
* THETA must be in developer mode

## Test Environment

* THETA THETA V firmware 2.31.1
* Android Studio 3.1.3
* Windows 10 64 bit
* File Cloud Upload Plug-in ver.1.0.9 (2018/07/23)

## Import Project

*File -> Import Project*

![import](/example/img/cloudupload/import.png)

## Browse Code

*app -> java -> com.theta360.cloudupload.net*

![upload photo](/example/img/cloudupload/uploadphoto.png)

### Secret Key

Scroll down to the section on SecretKey. You will need to insert your own 
SecretKey.

## Build Project

![build success](/example/img/cloudupload/build-success.png)

## Install

*adb install PATH\app-debug.apk*

![adb install](/example/img/cloudupload/install.png)

## Check App Permissions

The File Cloud Upload plug-in must have permission to use
storage.

In Vysor, go to *Settings -> Apps*.

![wrong permissions](/example/img/cloudupload/wrong-permissions.png)

![correct permissions](/example/img/cloudupload/correct-permissions.png)

## Test Usage

Please see the Plug-in User Guide for usage information.