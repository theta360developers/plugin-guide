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


## Using adb with Wi-Fi

THETA is set so that Wi-Fi is unavailable while connected to USB. But this will make development more difficult for network connected plug-ins. However, in development mode, Wi-Fi becomes available while connected to USB using the command below.

    adb shell settings put global usb_debug true


## Set Active Plugin

When you develop the plugin application, a companion mobile application can set the active plugin using the
WiFi API of the camera. The Ricoh mobile application that
most of your users will also have can set the active plugin. For
testing, you can either use the Ricoh mobile app, build your own mobile app, or send a REST command
using an HTTP testing tool such as 
[curl](https://curl.haxx.se/)  or [Postman](https://www.getpostman.com/). 



### Show List of Plugins With API

The POST command:

    $ curl -X POST 192.168.1.1/osc/commands/execute --data '{"name":"camera._listPlugins"}' -H 'content-type: application/json'

The response

    {
    "name":"camera._listPlugins",
    "results":{
        "plugins":[
            {
                "applicationName":"Remote Playback",
                "boot":false,
                "bootOptions":"",
                "force":false,
                "foreground":false,
                "packageName":"com.theta.remoteplayback",
                "running":false,
                "type":"extended",
                "version":"1.00.20171106144412"
            },
            {
                "applicationName":"PluginSample",
                "boot":true,
                "force":false,
                "foreground":false,
                "packageName":"com.theta360.pluginsample",
                "running":false,
                "type":"extended",
                "version":"1.0"
            }
        ]
    },
    "state":"done"
    }

> __Note that this command was changed from `camera._listApplications`, which is now deprecated__



In the example below, I am using 
Restlet Client, which is a browser-based Chrome tool similar to Postman.

I am using THETA V firmware 1.20.1. This command may change in the future.  Use com.theta360.yourappname for the packageName. Note that in the example below, my package is called pluginsample.

![](img/use/setPlugin.png)

This is the POST command:

    http://192.168.1.1/osc/commands/execute

    {
        "name": "camera._setPlugin",
        "parameters": {
            "packageName": "com.theta360.pluginsample",
            "boot": "true",
            "force": "false"
        }
    }

Note that the command changed in firmware 1.20.1. The command 
was previously `camera._setApplication` and is deprecated, though it 
still works in firmware 1.20.1.


### Save HTTP Test Scripts in Separate Tool 

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

