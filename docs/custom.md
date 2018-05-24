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

| Tutorial       |  Learning Objective             |  Benefit of Learning      |   
| ------------------- | -------------------------  |  -------------------      |
| [Vysor](tutorialvysor) | Learn techniques to to test plug-in and related technologies | Test plug-in without mobile phone display |
| [LED Color](/tutorialcolor/)       | Understand structure of plug-in library. Control LED color. | Be able to use plugin library.  |
| [LED Communication](/tutorialcommunication/)    | Learn how to communicate status of app or camera to users using the LEDs. | Communicate to users without mobile phone display |
| [Camera Buttons](/tutorialbutton/) | Learn to use camera buttons to get user input. | Get user input without mobile phone touchscreen |
| [Dual-Fisheye](/tutorialfisheye/)  | Understand how to change equirectangular stitching and reduce time between shots. | Start basic image processing |



## Next steps

You can now go back to the main Android developer documentation on the Android site to 
add in standard Android functionality. You can also  test different libraries 
for network and image processing.  The next section of this guide, 
[Custom Development Tips](/customtips),
will show you how to adjust the stitching of the THETA images. We'll update this
document regularly.  If you have questions, the 
[community](https://community.theta360.guide/c/theta-api-usage/plugin) is here to help.