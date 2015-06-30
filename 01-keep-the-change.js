/**
 * Created by Strahil on 11/13/14.
 */
'use strict';

var sampleInput = [
    [120.44, 'happy'],
    [1230.83, 'drunk'],
    [716.00, 'bored'],
    [356, 'married']
];

for (var i in sampleInput) {
    calculateTip(sampleInput[i]);
}

function calculateTip(input) {
    var bill = Number(input[0]);
    var mood = input[1];
    var tip;
    switch (mood) {
        case 'happy':
            tip = bill * 0.1;
            break;
        case 'married':
            tip = bill * 0.0005;
            break;
        case 'drunk':
            tip = bill * 0.15;
            var power = parseInt(tip.toString()[0]);
            tip = Math.pow(tip, power);
            break;
        default:
            tip = bill * 0.05;
            break;
    }
    tip = tip.toFixed(2);
    console.log(tip);
}