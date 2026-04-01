/**
 * Jquery 函数重载的基础上，优化: 建立映射
 */
function createOverload() {
    const fnMap = new Map();
    function overload(...args) {
        const key = args.map(arg => typeof arg).join('.');
        const fn = fnMap.get(key);
        if (!fn) {
            throw new TypeError(`No method found for ${key} arguments: 没找到对应的实现`);
        }
        return fn.apply(this, args);
    }
    overload.addImpl = function (...args) {
        const fn = args.pop();
        if (typeof fn !== 'function') {
            throw new TypeError('The last argument must be a function: 最后一个参数必须是函数');
        }
        const key = args.join(".");
        fnMap.set(key, fn);
    }
    return overload;
}

export default createOverload;