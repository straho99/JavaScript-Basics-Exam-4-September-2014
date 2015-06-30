/**
 * Created by Strahil on 11/13/14.
 */
'use strict';

var test1 = [
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
];

var test2 = [
   'Terra-Nova 16 2',
   'Perseus 2.6 4.8',
   'Virgo 1.6 7',
   '2 5',
   '4'
];

printSpacePath(test2);

function printSpacePath(input) {
    var SpaceShip = function (x, y) {
        this.x = x;
        this.y = y;
    };
    var Star = function (x, y, name) {
        this.name = name.toLowerCase();
        this.x = x;
        this.y = y;
        this.isInside = function (spaceship) {
            if (spaceship.x >= (this.x - 1) && spaceship.x <= (this.x + 1) && spaceship.y >= (this.y - 1) && spaceship.y <= (this.y + 1)) {
                //console.log('true: ' + spaceship.x + '/' + spaceship.y + ' : ' + this.x + '/' + this.y);
                return true;
            } else {
                //console.log('false: ' + spaceship.x + '/' + spaceship.y + ' : ' + this.x + '/' + this.y);
                return false;
            }
        }
    };
    var stars = [];
    for (var i = 0; i < 3; i++) {
        var tokens = input[i].toString().split(/[ ]+/g);
        var star = new Star(Number(tokens[1]), Number(tokens[2]), tokens[0]);
        stars.push(star);
    }
    var tokens = input[3].toString().split(/[ ]+/g);
    var normandy = new SpaceShip(Number(tokens[0]), Number(tokens[1]));
    var turns = Number(input[4]);
    for (var i = 0; i <= turns; i++) {
        var position = '';
        for (var j = 0; j < stars.length; j++) {
            if (stars[j].isInside(normandy)) {
                position = stars[j].name;
            }
        }
        if (position == '') {
            position = 'space';
        }
        console.log(position);
        normandy.y = normandy.y + 1;
    }
}