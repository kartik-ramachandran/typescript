/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-5-10.js
 * @description Array.prototype.map - Array object can be used as thisArg
 */


function testcase() {

        var objArray = new Array(2);

        function callbackfn(val, idx, obj) {
            return this === objArray;
        }

        var testResult = [11].map(callbackfn, objArray);
        return testResult[0] === true;
    }
runTestCase(testcase);
