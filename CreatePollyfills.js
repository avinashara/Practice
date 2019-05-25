if (typeof Object.create !== 'function') {
    Object.create = function (props) {
        if (typeof props !== 'object' || typeof props !== 'function') throw new TypeError("Invalid first params type, Please provide proper Object" + props);
        if (props === null) throw Error("Passed parms must be Object");
        function F() { };
        F.prototype = props;
        return new F();
    }
}