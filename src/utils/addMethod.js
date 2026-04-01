
/*
* Jquery 函数重载
*/
function addMethod(obj, name, fn) {
    var old = obj[name];
    obj[name] = function(...args) {
        if (args.length == fn.length) {
            return fn.apply(this, args);
        } else if (typeof old == 'function') {
            return old.apply(this, args);
        }
    };
};

export default addMethod;