const myEach = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
};

const myMap = (collection, callback) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
        result.push(callback(value));
    }
    return result;
};

const myReduce = (collection, callback, acc) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
};

const myFind = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
};

const myFilter = (collection, predicate) => {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
        if (predicate(value)) result.push(value);
    }
    return result;
};

const mySize = (collection) => {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
};

const myFirst = (array, n = 1) => {
    return n === 1 ? array[0] : array.slice(0, n);
};

const myLast = (array, n = 1) => {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
};

const myKeys = (object) => {
    return Object.keys(object);
};

const myValues = (object) => {
    return Object.values(object);
};