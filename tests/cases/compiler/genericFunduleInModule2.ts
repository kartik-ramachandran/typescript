// BUG 756210
module A {
    export function B<T>(x: T) { return x; }
}

module A {
    export module B {
        export var x = 1;
    }
}

var b: A.B;
A.B(1);