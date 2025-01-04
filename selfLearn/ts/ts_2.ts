// Strict Null Checks
let nullableString : string | null = null;
nullableString = 'Zayaan'
nullableString = null

// Readonly and Immutable Types

interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = {x: 50, y: 0};
