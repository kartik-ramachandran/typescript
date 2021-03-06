// this should be an error
function nullWidenFunction() {
    return null;
}
function undefinedWidenFunction() {
    return undefined;
}

var C = (function () {
    function C() {
    }
    C.prototype.nullWidenFuncOfC = function () {
        return null;
    };

    C.prototype.underfinedWidenFuncOfC = function () {
        return undefined;
    };
    return C;
})();

// this should not be an error
function foo1() {
    return null;
}
function bar1() {
    return undefined;
}
function fooBar() {
    return 1;
}
function fooFoo() {
    return 5;
}

// this should not be an error as the error is raised by expr above
nullWidenFunction();
undefinedWidenFunction();
