# Vysor Tips

##  Using Vysor From Linux or Other OS

I've found the easiest way to Vysor on Linux is to use the 
[Vysor Chrome Extension](https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm?authuser=1) in the Chrome web browser on Linux.

![Vysor Extension](img/workflow/vysor/vysor-in-chrome.png)

On Linux, you can also install Vysor as a desktop application with the information [here](https://github.com/koush/electron-chrome).

The basic process is shown below.

    git clone https://github.com/koush/electron-chrome.git
    cd electron-chrome
    npm install


Using the Chrome Store app id for Vysor:

    electron --enable-logging . --app-id=gidgenkbbabolejbgbpnhbimgjbffefm

![](img/vysor/vysor-linux.png)

## Fixing Flickering Problem on Certain NVIDIA Cards

On an old NVIDIA graphics card, I needed to disable flipping using the NVIDIA X Server Settings. I am using X11, not Wayland on Ubuntu 18.04.  You can check to see if you're running Wayland or X11 with this:

    $ echo $XDG_SESSION_TYPE
    x11

![OpenGL Settings](img/workflow/vysor/opengl-settings.png)