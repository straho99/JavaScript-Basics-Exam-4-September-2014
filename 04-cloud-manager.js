/**
 * Created by Strahil on 11/14/14.
 */
'use strict';

var test1 = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
];
var test2 = [
    'eclipse .tar.gz 198.00MB',
    'uTorrent .gyp 33.02MB',
    'nodeJS .gyp 14MB',
    'nakov-naked .jpeg 3MB',
    'gnuGPL .pdf 5.6MB',
    'skype .tar.gz 66MB',
    'selfie .jpeg 7.24MB',
    'myFiles .tar.gz 783MB'
];

processFiles(test2);

function processFiles(input) {
    var fileInfo = {};
    for (var i = 0; i < input.length; i++) {
        var tokens = input[i].split(' ');
        var fileName = tokens[0].trim();
        var fileExtension = tokens[1].trim();
        var fileSize = tokens[2].trim();
        fileSize = fileSize.substr(0, fileSize.length - 2);
        fileSize = Number(fileSize);
        if (!fileInfo[fileExtension]) {
            var theFiles= [];
            theFiles.push(fileName);
            fileInfo[fileExtension] = {
                files: theFiles,
                memory: fileSize
            };
        } else {
            fileInfo[fileExtension].files.push(fileName);
            fileInfo[fileExtension].memory += fileSize;
        }
    }
    fileInfo = sortObjectProperties(fileInfo);
    for (var key in fileInfo) {
        fileInfo[key].files.sort();
        fileInfo[key].memory = fileInfo[key].memory.toFixed(2);
    }
    console.log(JSON.stringify(fileInfo));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}