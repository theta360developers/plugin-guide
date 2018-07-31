# Automatic Face Blur Example

The source code is available on GitHub.  

[https://github.com/ricohapi/theta-automatic-face-blur-plugin](https://github.com/ricohapi/theta-automatic-face-blur-plugin)

## Build Project

## Import

![import](/example/img/faceblur/import-project.png)

Verify that you imported the correct project.  :-)

![Face code](/example/img/faceblur/face-java.png)

## Build

*Build -> Build APK(s)*

![build](/example/img/faceblur/build.png)

You should see a successful build.

![success build](/example/img/faceblur/build-success.png)

My APK is 1,891 KB.

## Install

    adb install -r PATH/app-debug.apk

![install success](/example/img/faceblur/install-success.png)


## Enable

In the Ricoh desktop application, go to *File -> Plug-in management...*.

![plug-in management](/example/img/faceblur/plug-in-management.png)

Select Automatic Face Blur.

![select face blur](/example/img/faceblur/select-face-blur.png)

## Set Plug-in Permissions

In Vysor, go to app settings.

![App Selection](/example/img/faceblur/app-selection.png)

Enable storage permission.

![Storage Permission](/example/img/faceblur/storage-permission.png)




## Configure

Get IP address. In the example below, I'm using Vysor.

![IP address](/example/img/faceblur/ip-address.png)

Go to your IP address at port 8888.

    http://192.168.2.100:8888/



## Test

Put camera in plug-in mode. 

Take picture.

The camera will save two pictures. The original file starts with R. The 
blurred file starts with B.

![Face Blurred](/example/img/faceblur/face-blurred.png)

The original image is shown below.

![Original](/example/img/faceblur/original.png)
