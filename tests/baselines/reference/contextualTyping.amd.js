var C1T5 = (function () {
    function C1T5() {
        this.foo = function (i) {
            return i;
        };
    }
    return C1T5;
})();
var C2T5;
(function (C2T5) {
    C2T5.foo = function (i) {
        return i;
    };
})(C2T5 || (C2T5 = {}));
var c3t1 = (function (s) {
    return s;
});
var c3t2 = ({
    n: 1
});
var c3t3 = [];
var c3t4 = function () {
    return ({});
};
var c3t5 = function (n) {
    return ({});
};
var c3t6 = function (n, s) {
    return ({});
};
var c3t7 = function (n) {
    return n;
};
var c3t8 = function (n) {
    return n;
};
var c3t9 = [
    [], 
    []
];
var c3t10 = [
    ({}), 
    ({})
];
var c3t11 = [
    function (n, s) {
        return s;
    }];
var c3t12 = {
    foo: ({})
};
var c3t13 = ({
    f: function (i, s) {
        return s;
    }
});
var c3t14 = ({
    a: []
});
var C4T5 = (function () {
    function C4T5() {
        this.foo = function (i, s) {
            return s;
        };
    }
    return C4T5;
})();
var C5T5;
(function (C5T5) {
    C5T5.foo;
    C5T5.foo = function (i, s) {
        return s;
    };
})(C5T5 || (C5T5 = {}));
var c6t5;
c6t5 = function (n) {
    return ({});
};
var c7t2;
c7t2[0] = ({
    n: 1
});
var objc8 = ({});
objc8.t1 = (function (s) {
    return s;
});
objc8.t2 = ({
    n: 1
});
objc8.t3 = [];
objc8.t4 = function () {
    return ({});
};
objc8.t5 = function (n) {
    return ({});
};
objc8.t6 = function (n, s) {
    return ({});
};
objc8.t7 = function (n) {
    return n;
};
objc8.t8 = function (n) {
    return n;
};
objc8.t9 = [
    [], 
    []
];
objc8.t10 = [
    ({}), 
    ({})
];
objc8.t11 = [
    function (n, s) {
        return s;
    }];
objc8.t12 = {
    foo: ({})
};
objc8.t13 = ({
    f: function (i, s) {
        return s;
    }
});
objc8.t14 = ({
    a: []
});
function c9t5(f) {
}
;
c9t5(function (n) {
    return ({});
});
var c10t5 = function () {
    return function (n) {
        return ({});
    };
};
var C11t5 = (function () {
    function C11t5(f) {
    }
    return C11t5;
})();
;
var i = new C11t5(function (n) {
    return ({});
});
var c12t1 = (function (s) {
    return s;
});
var c12t2 = ({
    n: 1
});
var c12t3 = [];
var c12t4 = function () {
    return ({});
};
var c12t5 = function (n) {
    return ({});
};
var c12t6 = function (n, s) {
    return ({});
};
var c12t7 = function (n) {
    return n;
};
var c12t8 = function (n) {
    return n;
};
var c12t9 = [
    [], 
    []
];
var c12t10 = [
    ({}), 
    ({})
];
var c12t11 = [
    function (n, s) {
        return s;
    }];
var c12t12 = {
    foo: ({})
};
var c12t13 = ({
    f: function (i, s) {
        return s;
    }
});
var c12t14 = ({
    a: []
});
function EF1(a, b) {
    return a + b;
}
var efv = EF1(1, 2);

function Point(x, y) {
    this.x = x;
    this.y = y;
    return this;
}
Point.origin = new Point(0, 0);
Point.prototype.add = function (dx, dy) {
    return new Point(this.x + dx, this.y + dy);
};
Point.prototype = {
    x: 0,
    y: 0,
    add: function (dx, dy) {
        return new Point(this.x + dx, this.y + dy);
    }
};
window.onmousedown = function (ev) {
    ev.bubbles;
};
var x = {};
//@ sourceMappingURL=0.js.map
////[0.js.map]
{"version":3,"file":"0.js","sources":["0.ts"],"names":["C1T5","C1T5.constructor","","C2T5","C2T5.foo","c3t1","c3t4","c3t5","c3t6","c3t7","c3t8","","f","C4T5","C4T5.constructor","C4T5.constructor.foo","C5T5","C5T5.foo","","t1","t4","t5","t6","t7","t8","","f","c9t5","","c10t5","","C11t5","C11t5.constructor","","","","","","","","","f","EF1","Point","add","add","onmousedown"],"mappings":"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"}
////[comments_ExternalModules_0.js]
//@ sourceMappingURL=comments_ExternalModules_0.js.map
////[comments_ExternalModules_0.js.map]
{"version":3,"file":"comments_ExternalModules_0.js","sources":["comments_ExternalModules_0.ts"],"names":[],"mappings":""}
////[comments_ExternalModules_1.js]
//@ sourceMappingURL=comments_ExternalModules_1.js.map
////[comments_ExternalModules_1.js.map]
{"version":3,"file":"comments_ExternalModules_1.js","sources":["comments_ExternalModules_1.ts"],"names":[],"mappings":""}
////[comments_MultiModule_MultiFile_0.js]
//@ sourceMappingURL=comments_MultiModule_MultiFile_0.js.map
////[comments_MultiModule_MultiFile_0.js.map]
{"version":3,"file":"comments_MultiModule_MultiFile_0.js","sources":["comments_MultiModule_MultiFile_0.ts"],"names":[],"mappings":""}
////[comments_MultiModule_MultiFile_1.js]
//@ sourceMappingURL=comments_MultiModule_MultiFile_1.js.map
////[comments_MultiModule_MultiFile_1.js.map]
{"version":3,"file":"comments_MultiModule_MultiFile_1.js","sources":["comments_MultiModule_MultiFile_1.ts"],"names":[],"mappings":""}