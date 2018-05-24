
# LED Communication

As the RICOH THETA does not have a screen, your Android plug-in will need to use
LEDs and sound as the primary way to communicate the status of your application
to the user.

There are three variables you can control.

1. Color of LED3
2. Which LED
3. LED blink rate

By varying the location, speed and color of the camera LEDs, you can communicate
the status of your plug-in to the user.

In the the next example, we will blink LEDs 4, 5, 6, 7, and 8. We will not be 
controlling the color as only the color for LED3 can be controlled. 


## 1 Edit MainActivity in Android Studio

Go back to `MainActivity`. Comment out the line for LED3 and add the following lines to test the other 
LEDs.

    notificationLedBlink(LedTarget.LED4, LedColor.BLUE, 300);
    notificationLedBlink(LedTarget.LED5, LedColor.BLUE, 300);

    notificationLedBlink(LedTarget.LED6, LedColor.BLUE, 300);
    notificationLedBlink(LedTarget.LED7, LedColor.RED, 300);
    notificationLedBlink(LedTarget.LED8, LedColor.RED, 300);

![](img/custom/led/led-4-8-code.png)

## 2 Build, Install, Reboot

Follow the same process described in the section above.

1. Build the apk from within Android Studio
2. Find the location of the APK
3. cd into that directory
4. install the apk with `adb install -r app-debug.apk`
5. reboot camera

## 3 Test

Press the lower mode button for longer than 2 seconds to put the camera into 
plug-in mode. 

You should see all LEDs 4-8 blinking with a delay of 300ms between blinks.
    
![](img/custom/led/led-4-8.png)

Congratulations!  You've just finished your second custom plug-in for the RICOH 
THETA V.
