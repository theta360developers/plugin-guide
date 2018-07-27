# Plug-in Partner Program Submission
A list of "warnings" is [here](http://theta360.guide/plugin-guide/requirements/#warnings-when-developing-plug-ins). Please read the list closely.

Beyond that, several issues have come up repeatedly. Here are some Tips when building your Plug-ins. Special thanks to Fream and HoloBuilder for adding useful information here.

The following are Tips to make sure the process goes quicker. We will add more as necessary.

## The licenses.html File

You need to include any open source license information used by your plug-in in the apk file under `\assets\licenses.html`. No special format is required but expect users to be able to see it. The licenses.html file does not need to include the EULA, it's fine to just include the open source licenses info.

Note: The /assets folder should be included in the .zip file, not just the RICOH SnapChamber (upload mechanism).

You can get license information using the Web API command `camera._getPluginLicense`. 

This is example of HTML file for license.html

    <html>
    <head>
       <meta http‐equiv="Content‐Type" content="text/html; charset=windows‐1252">
       <style type="text/css">
    body { padding: 0; font‐family: sans‐serif; }
       </style>
    </head>
    <body topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0">
    <div>
       <p>This plugin uses <TYPE LICENSES FROM YOUR LIBRARIES> licensed libraries</p>
    </div>
    </body>
    </html>

## Your Plug-in Build number

The format is major.minor.buildnumber, so it'll probably commonly be: 1.0.0

* Major version - big changes in code
* Minor version - small changes in code, maybe one feature or something like that
* Fixes version - bug fixes release, etc.

Longer description of major.minor.buildnumber format here: https://semver.org

## PackageName issues

To make sure that your PackageName and your Plug-in name are the same, you need to be check several places.

Examples stated here are for a plug-in called "yourpluginname," with a company name called "Oppkey," and a website "theta360.guide".

1. App level build gradle could have `applicationId` in defaultConfig closure - Example applicationId: 
"guide.theta360.oppkey.yourpluginname"

2. In the <Manifest> tag you have a "package" attribute - Example: package="guide.theta360.oppkey.yourpluginname"

3. In the Manifest inside the application tag you have an attribute label - Example: "Your Plug-in Name" (spaces fine)

For distributing Android apps, `applicationId` is very important, because it overrides your package in the manifest. You can have different suffixes for your applicationId (.beta .debug, etc.).

This is important because `applicationId` (and therefore the package from the Manifest) is used by Google Play to identify your app.

You can set ANY label for your app.

For publishing it is important to have the proper `applicationId` which corresponds to the code package. The label should be the same as the plugin name.

When you send your plug-in .zip file to RICOH, name your APK YourLabelWIthoutSpaces.apk, add 1.png...5.png files. You can attach your README.TXT to the .zip file.

NAME OF ZIP WITH THOSE FILES IS = applicationID
Example: guide.theta360.oppkey.yourpluginname.zip