# PHOTOSHOP TARGA SCRIPTS

Simplify the steps to saving TGA paint files from Photoshop into the iRacing Paints folder.

### CREDITS

I need to credit Stephen Marsh who provided me with a working script at the start after I posted to the [Photoshop Community](https://community.adobe.com/t5/photoshop-ecosystem-discussions/scripts-for-saving-targa-tga-files-to-a-known-folder-location/td-p/13998437) forums.

### HOW TO

The scripts work on the basis that your working folder and file name match those used by iRacing e.g.

```
paint/car_folder/car_cust_id.psd == design/car_folder/car_cust_id.psd
```

#### Update your Documents location:

The default location for your iRacing Paints folder will be on the C Drive but often people will move it to another location because of storage. 

The default iRacing file path for paints is: C:\Users\<YourUserName>\Documents\iRacing\paint 

However, the scripts are set up to use D:\Documents\iRacing\paint because my Documents folder is on a different drive. 

Update line 16/17 in both scripts to your paint folder location.  Note you will need to put the path between speechmarks and swap back slashes for forward ones.

Also you need to go the long route to get the full path. Open Windows Explorer, click on This PC, C Driver, Users followed by your Username, Documents and iRacing.  Eventually you should see the paint folder.  Right click on this and choose copy Address as text.   If you have done it right it should look something like the example above.

#### To use them:

1. Copy the files to your Program Files\Adobe\<Your Photoshop Version>\Presets\Scripts folder.
2. Access them File > Scripts in photoshop

There is more information and detail available at [Saving Targa Files for iRacing from Photoshop](https://byteinsight.co.uk/2023/12/saving-targa-files-for-iracing-from-photoshop/)

### CHANGES

#### v1.0 - 22nd October 2024, Stephen Marsh
- Initial script for Save Skin produced.

#### v1.1 - 23rd October 2024, Byte Insight
- Second version of the script prepared for Save Spec

#### v2.0 - 22nd October 2024, Byte Insight
- Move the main code into a function
- Added commenting.
- Stopped the script from continuing when Overwrite No was chosen.
