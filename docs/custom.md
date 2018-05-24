# Development Tutorials

## Overview

Your primary way to control the camera is with the Android Camera class. Although this API was
deprecated in level 21, it still works. Make sure you use the older Camera class and not
the newer camera2 API.

Use the offiical Android API documentation as your main reference.

[https://developer.android.com/reference/android/hardware/Camera.html](https://developer.android.com/reference/android/hardware/Camera.html)


There are a set of THETA features that are not covered by the Android 
[Camera](https://developer.android.com/reference/android/hardware/Camera.html)
API. These are covered by using 
[Camera.Parameters](https://developer.android.com/reference/android/hardware/Camera.Parameters.html)


We have prepared four tutorials for you to get started.

| Tutorial       |  Learning Objective     |
| ------------------- | -------------------------  |
| [LED Color](/tutorialcolor/)       | Introduction to plug-in library. Control LED color. |
| [LED Communication](/tutorialcommunication/)    | Basic status communication to users with the LEDs. |
| [Camera Buttons](/tutorialbutton/) | Using camera buttons to get user input. |
| [Dual-Fisheye](/tutorialfisheye/)  | Equirectangular stitching control and rapid shooting. |



## Next steps

You can now go back to the main Android developer documentation on the Android site to 
add in standard Android functionality. You can also  test different libraries 
for network and image processing.  The next section of this guide, 
[Custom Development Tips](/customtips),
will show you how to adjust the stitching of the THETA images. We'll update this
document regularly.  If you have questions, the 
[community](https://community.theta360.guide/c/theta-api-usage/plugin) is here to help.