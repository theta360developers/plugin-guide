# Ricoh THETA V Plugin Application Development - Community Guide

![](img/product/front-image.png)

*By [Craig Oda and Jesse Casman](/about/) of [Oppkey](http://oppkey.com/)*

> This guide is being updated with additional source code examples for plug-ins. We hope
> to have the examples ready for you at the end of July 2018.
> We are building examples for live streaming, plug-in configuration with a browser GUI, Google account authentication,
> cloud upload with Wi-Fi, and many additional techniques. We hope to have examples to connect the camera directly to
> popular services such as Google, YouTube, Facebook, and Periscope. There are currently source code
> examples for
> basic camera control and stitching in the SDK and dual-fisheye plug-in packages. Please check back regularly.

This is a compilation of community experiences and tests from members of [theta360.guide](http://theta360.guide), an
independent developer community for RICOH THETA cameras.  The *community-created* document you are reading may contain factual errors. Please help the community to 
update this document using pull requests on [GitHub](https://github.com/theta360developers/plugin-guide).

## Official Ricoh Information

- [Plug-in SDK](https://github.com/ricohapi/theta-plugin-sdk)
- [Plug-in API](https://api.ricoh/docs/theta-plugin/api/?utm_source=theta360guide)

## THETA V Plugin Application Development Overview

The THETA V uses Android as the operating system. Because of this, the THETA V application development process is the same as the development process for an Android phone. Connect the THETA V to a development workstation, either Mac, Windows, or Linux with a micro USB cable and connect to the camera with adb. You will need a THETA V 
that is in developer mode. To put your THETA V into developer mode, please
[join the RICOH THETA Plug-in Partner Program](https://www8.webcas.net/db/pub/ricoh/thetaplugin/create/input).

This document covers the following development process and tips:

  - Resources and Setup:
    - [Requirements](/requirements/)
    - [Camera Hardware](/hardware/) 
    - [Setup](setup)
  - Development Workflow:
    - [Plugin Use](/use/)
    - [Using WiFi API](/wifiapi/)
    - [Custom Development Tips](/customtips/)
    - [Plugin Configuration](/configuration/) 
    - [Workflow Tips](/workflow/) 
    - [Vysor Tips](/vysortips/)
    - [Troubleshooting](/troubleshoot/)
  - Tutorials:
    - [Tutorials Overview](/custom/) 
    - [Tutorial - Vysor](/tutorialvysor/) 
    - [Tutorial - LED Color](/tutorialcolor/) 
    - [Tutorial - LED Communication](/tutorialcommunication/) 
    - [Tutorial - Camera Buttons](/tutorialbutton/)
    - [Tutorial - Dual Fisheye](/fisheye/) 
  - Community Resources:
    - [Fun Tests](/fun/) 
    - [Concept Ideas](/concept/) 
    - [Community](/community/) 
    - [About](/about/) 
