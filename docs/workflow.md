# Development Workflow Tips

## Debugging

### Save logcat to file on camera

This is a typical debugging workflow:

1. Enter `adb shell` in terminal to enter the shell in the camera.
2. `logcat > /sdcard/DCIM/log.txt&`
3. Reproduce issue, camera may reboot.
4. `adb pull /sdcard/DCIM/log.txt` in terminal 


### View logcat on workstation

For some messages, you can also debug the THETA V with a USB 
cable and adb in real-time. The camera will 
operate in Plugin Mode while connected to adb. It's better to
save to save as explained above because the camera may lock or 
reboot when it encounters the bug and you'll lose the connection.

![](img/debug/debug-connection.png)

You will be able to get debug messages similar to the example below:

       12-14 07:53:24.105  1171  1373 E TaskPersister: File error accessing recents directory (directory doesn't exist?).

Example debug output with the camera connected to my Linux computer with a USB cable 
and in plug-in mode.

![](img/debug/debug-screen.png)

## Save HTTP Test Scripts in Separate Tool 

To set the active plugin, you can also use the WiFi API. To use 
the WiFi API, you must connect your 
computer to the THETA with WiFi. 
Although you can use a curl script to switch plugins with the WiFi API,
I find it easier to use a tool like 
Restlet Client to save my HTTP test scripts into a group. I can select an
individual test and run it with a push of a button. To switch plugins, I 
saved a script for  `camera._setPlugin`. You can get a list of plugins with 
`camera._listPlugins`.

![](img/custom/restlet-client.png)

In addition to saving the HTTP test scripts, Restlet Client or Postman will show the
JSON response in *pretty* format automatically. With curl, you will need to
pipe the output to another tool to get *pretty print*.

![](img/custom/restlet-client-response.png)

## Using Standard Android Packages
You can download apks from many sites for testing things like 
communication protocol with Facebook Messenger or video transmission.

I've been using this site with good results.

[https://apkpure.com/app](https://apkpure.com/app)

For example, I can send 360 images directly from the THETA V storage to Facebook Messenger.
The images are viewable in 360 by the recipient.

![](img/workflow/facebook-messenger.png)



## Enabling WiFi for All Apps

With the keyboard enabled, you can now type in your password for your WiFi hotspot to connect to the Internet.

![](img/workflow/wifi/wlan-switch.png)

Connect to WiFi and all your apps and plug-ins will be able to connect to the Internet.

![](img/workflow/wifi/wifi-connected.png)

