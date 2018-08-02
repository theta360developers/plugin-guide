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


![Web Interface](/example/img/faceblur/test-shot.png)


## Test

Put camera in plug-in mode. 

Take picture.

The camera will save two pictures. The original file starts with R. The 
blurred file starts with B.

![Face Blurred](/example/img/faceblur/face-blurred.png)

The original image is shown below.

![Original](/example/img/faceblur/original.png)

## Inspect Code

### Face Detection

Under `/task/` 
[ImageProcessorTask.java](https://github.com/ricohapi/theta-automatic-face-blur-plugin/blob/master/app/src/main/java/com/theta360/automaticfaceblur/task/ImageProcessorTask.java) has the code to detect a human face.

It uses [android.media.FaceDetector](https://developer.android.com/reference/android/media/FaceDetector).

At the top of the code, there are constants that define the max number of faces, and the edges
of the equirectangular image. The image is divided into four quandrants.

    //Divide the equirectangular image into similar four parts, the rightmost x coordinate of the leftmost part.
    private static final int RIGHTMOST_OF_LEFT_IMAGE = 1344;
    //Divide the equirectangular image into similar four, the leftmost x coordinate of the rightmost part.
    private static final int LEFTMOST_OF_RIGHT_IMAGE = 4032;
    //Maximum of faces can be detected.
    private static final int MAX_FACE = 256;
    public static final String BLURRED_FILE_KEY = "blurred_file_url";
    public static final String ORIGINAL_FILE_KEY = "original_file_url";

There are numerous examples of FaceDection for Android online.

Blurring is accomplished with [FaceDetector.Face](https://developer.android.com/reference/android/media/FaceDetector.Face). Inspect the code
to see the example.

### LivePreview

Streaming to the web browser is handled with [camera.getLivePreview](https://developers.theta360.com/en/docs/v2.1/api_reference/commands/camera.get_live_preview.html),
which is the THETA API 2.1, the API based on OSC. We sometimes refer to this API as the Wi-Fi API.

In the file [ShowLiveViewTask.java](https://github.com/ricohapi/theta-automatic-face-blur-plugin/blob/master/app/src/main/java/com/theta360/automaticfaceblur/task/ShowLiveViewTask.java), you can see the code.

    publishProgress("start Live view");
    HttpConnector camera = new HttpConnector();
    InputStream is = camera.getLivePreview();
    mjis = new MJpegInputStream(is);
 
You can see that the output of `getLivePreview` is a MotionJPEG stream, not H.264.
Using `getLivePreview` with the THETA V will result in a maximum
resolution of 1920x960 using MotionJPEG, not the 3840x1920 for
Live Streaming. As shown with the Wireless Live Streaming plug-in,
Wi-Fi streaming at 4K is smooth from the camera directly.

It's important to note that this method does not use the `RicMoviePreview3840` or similar value for `RIC_SHOOTING_MODE` that is explained in the 
[THETA Plug-in API](https://api.ricoh/docs/theta-plugin-reference/camera-api/).

The LivePreview method shown above uses the THETA API 2.1 for simplicity and ease of implementation. It does
not use the THETA Plug-in API.
