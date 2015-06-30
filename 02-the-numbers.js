/**
 * Created by Strahil on 11/13/14.
 */
'use strict';
var sampleInput = [
    '5tffwj(//*7837xzc2---34rlxXP%$”.',
    '482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312',
    '20'
];

for (var i in sampleInput) {
    getNumbers([sampleInput[i]]);
}

function getNumbers(texts) {
    var text = texts[0];
    var regEx = /\d+/g;
    var numbers = text.match(regEx);
    //console.log(numbers);
    var hexNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        var hex = Number(numbers[i]).toString(16).toUpperCase();
        var zeroesCount = 4 - hex.length;
        for (var j = 1; j <= zeroesCount; j++) {
            hex = '0' + hex;
        }
        hex = '0x' + hex;
        hexNumbers.push(hex);
    }
    //console.log(hexNumbers);
    var output = '';
    for (var i = 0; i < hexNumbers.length; i++) {
        output += hexNumbers[i] + '-';
    }
    output = output.substr(0, output.length - 1);
    console.log(output);
}
