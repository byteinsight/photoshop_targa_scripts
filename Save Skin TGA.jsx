/*
Save TGA to Paint Folder.jsx
https://community.adobe.com/t5/photoshop-ecosystem-discussions/scripts-for-saving-targa-tga-files-to-a-known-folder-location/td-p/13998437
v1.0 - 11th August 2023, Stephen Marsh
v2.0 - 22nd October 2024, Byte Insight
v3.0 - 24th May 2025, Byte Insight
*/

var thePath = "D:/Documents/iRacing/paint";
var saveLocal = true;

#target photoshop

function main() {

    // If we have an open document
    if (app.documents.length > 0) {

        // Prepare some file names and locations.
        var sourceDirName = activeDocument.path.displayName;
        var docName = activeDocument.name.replace(/\.[^\.]+$/, '');
        var destinationDir = new Folder(thePath + "/" + sourceDirName)

        // If the destination folder doesn't exist create it
        if (!destinationDir.exists) {
            destinationDir.create()
        }

        // This is the destination file name
        var theFile = File(destinationDir + "/" + docName + ".tga");

        // If the file exists check you want to over write.
        if (theFile.exists) {
        	// true = 'No' as default active button
        	if (!confirm("'" + theFile.name + "' exists, overwrite: Yes or No?", true))
        		return;
        }

        // Finally call SaveTarga
        SaveTARGA(theFile);

        // This saves a local copy in the dev folder.
        if (saveLocal==true) {
            var localCopy = File(activeDocument.path + "/" + docName + ".tga");
            SaveTARGA(localCopy);
        }
        

        // Save the TARGA Function
        function SaveTARGA(saveFile) {
            SaveOptions = new TargaSaveOptions();
            TargaSaveOptions.alphaChannels = true; // Include alpha channels, change to false for none
            TargaSaveOptions.resolution = TargaBitsPerPixels.TWENTYFOUR; // Options of SIXTEEN or THIRTYTWO
            TargaSaveOptions.rleCompression = false; // False for no compression
            activeDocument.saveAs(saveFile, TargaSaveOptions, true, Extension.LOWERCASE);
        }

    } else {
        alert("A document must be open to save a TGA file!");
    }

} // End Main


// Call the main function
main();