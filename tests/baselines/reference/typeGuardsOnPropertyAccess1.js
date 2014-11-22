//// [typeGuardsOnPropertyAccess1.ts]
var x: string|number;
var r = x.length && x.charAt; // no error

var y: Array<string>|Array<number>|Date = [''];
var r2 = y.length ? y[0] : ""; // no error, string|number

if (y.length) { var r3 = y; } // no error, string[]|number[]

var r4 = x.length || x; // no error, number
var r5 = y.length || y.getDate(); // no error, 'any'?

var r6 = !x.length && x.toFixed();
var r7 = !x.length || x.substr(2);

//// [typeGuardsOnPropertyAccess1.js]
var x;
var r = x.length && x.charAt; // no error
var y = [''];
var r2 = y.length ? y[0] : ""; // no error, string|number
if (y.length) {
    var r3 = y;
} // no error, string[]|number[]
var r4 = x.length || x; // no error, number
var r5 = y.length || y.getDate(); // no error, 'any'?
var r6 = !x.length && x.toFixed();
var r7 = !x.length || x.substr(2);
