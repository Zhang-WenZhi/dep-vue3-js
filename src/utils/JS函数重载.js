import addMethod from "./addMethod.js";
import createOverload from "./overload.js";

/**
 * 依据参数数量实现重载
 * @param {}
 * @return {}
 */
function add() {
    console.log(arguments);
    const length = arguments.length;
    if (length === 2) {
        return arguments[0] + arguments[1];
    } else if (length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }
    return 0;
}

console.log(add(1, 2)); // 输出: 3
console.log(add(1, 2, 3)); // 输出: 6

/**
 * 借助参数类型实现重载
 * @param {}
 * @return {}
 */
function greet() {
    console.log(arguments, typeof arguments);
    const arg = arguments[0];
    if (typeof arg === 'string') {
        return `Hello, ${arg}!`;
    } else if (typeof arg === 'number') {
        return `Your number is ${arg}.`;
    }
    return 'Invalid input';
}

console.log(greet('John')); // 输出: Hello, John!
console.log(greet(123)); // 输出: Your number is 123.


/**
 * 更通用的函数重载实现
 * @param {}
 * @return {}
 */
function overloadedFunction() {
    const implementations = [];

    function addImplementation(argTypes, func) {
        implementations.push({ argTypes, func });
    }

    function execute() {
        const args = Array.from(arguments);
        for (const { argTypes, func } of implementations) {
            if (argTypes.length === args.length && argTypes.every((type, i) => typeof args[i] === type)) {
                return func.apply(this, args);
            }
        }
        throw new Error('No matching implementation found');
    }

    return {
        addImplementation,
        execute
    };
}

const myOverloadedFunction = overloadedFunction();

myOverloadedFunction.addImplementation(['string'], (str) => `You passed a string: ${str}`);
myOverloadedFunction.addImplementation(['number'], (num) => `You passed a number: ${num}`);
myOverloadedFunction.addImplementation(['string', 'number'], (str, num) => `You passed a string "${str}" and a number ${num}`);

console.log(myOverloadedFunction.execute('test')); // 输出: You passed a string: test
console.log(myOverloadedFunction.execute(123)); // 输出: You passed a number: 123
console.log(myOverloadedFunction.execute('test', 123)); // 输出: You passed a string "test" and a number 123


console.log("================Jquery 函数重载=======================")

/*
* Jquery 函数重载: 必须要把函数放到对象里面；只能判断参数的数量,不能判断参数的类型；
* ES6 参数默认值加入，会对参数的数量造成影响；
*/
const searcher = [];
addMethod(searcher, 'getUsers', () => {
    console.log('查询所有用户');
});

addMethod(searcher, "getUsers", (name) => {
    console.log("按照姓名查询用户", name);
})

addMethod(searcher, "getUsers", (firstName, sex) => {
    console.log("按照姓名和性别查询用户", firstName, sex);
});

searcher.getUsers();
searcher.getUsers(1);
searcher.getUsers(1, 20);
searcher.getUsers('张');
searcher.getUsers('张', '男');


console.log("================Jquery 函数重载的基础上，优化=======================")

const getUsers = createOverload();

getUsers.addImpl(() => {
    console.log('查询所有用户');
})

const searchPage = (page, size = 10) => {
    console.log("按照页码和数量查询用户")
    console.log('查询第', page, '页，每页', size, '条');
}
getUsers.addImpl('number', searchPage);
getUsers.addImpl('number', 'number', searchPage);

getUsers.addImpl('string', (name = 'a') => {
    console.log("按照姓名查询用户", name);
})

getUsers.addImpl('string', 'string', (firstName, sex) => {
    console.log("按照姓名和性别查询用户", firstName, sex);
})

getUsers();
getUsers(1);
getUsers(1, 2);
getUsers('a');
getUsers('a', 'b');