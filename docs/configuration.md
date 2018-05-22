
# Configuring Your Plug-in

## Configuration of Plug-in With Web Server

If you want to configure your plug-in with an external mobile app, one strategy is to embed an HTTP server into
your plug-in. A simple mobile app can then talk to the plug-in through the embedded HTTP server.
With this configuration strategy, the plug-in can launch a web server on port 8888 that provides a WebUI or its own API. 

You must use port 8888 on the plug-in web server, as the other ports are blocked. You can then
build a basic app on a smartphone to access the 
plug-in web server on the THETA V.

Developers have reported success using NanoHttpd, which is available from GitHub at 
[https://github.com/NanoHttpd/nanohttpd](https://github.com/NanoHttpd/nanohttpd).

Another way to access the plug-in configuration page you create is to use the OpenPluginPage API from the Ricoh v2.1 WiFi API on port 80. It will redirect to port 8888.

Information on the OpenPluginPage API is available here:

[https://developers.theta360.com/en/docs/v2.1/api_reference/protocols/open_plugin_page.html](https://developers.theta360.com/en/docs/v2.1/api_reference/protocols/open_plugin_page.html)


Your app can look for the presence or absence of the web server by using the Web API's [camera._listPlugins](https://developers.theta360.com/en/docs/v2.1/api_reference/commands/camera._list_plugins.html). The information from camera._listPlugins consists of information described in the configuration file (\assets\settings.json) of each plug-in. If the setting file does not exist or the setting value is incorrect, the default value is written in the camera._listPlugins information. 


Sample configuration file:

~~~
{
 "webServer": true
}
~~~

From talking with the community, we think the process is shown below.

![](img/custom/theta-v-plugin-configuration.png)



