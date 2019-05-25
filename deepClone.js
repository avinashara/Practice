function getDeepCloneObject(object) {
    if (typeof object !== 'object' || !object) throw new TypeError("Invalid first params");
    let obj = Array.isArray(object) ? [] : {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            let value = object[key];
            obj[key] = typeof value === 'object' ? getDeepCloneObject(value) : value;
        }
    }
    return obj;
}
console.log(getDeepCloneObject([[[4, { name: 'Avinash', ar: [{ name: 'Kumar' }] }]]]));