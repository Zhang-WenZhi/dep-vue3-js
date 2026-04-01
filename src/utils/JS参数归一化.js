/**
* 1. 处理可选参数
* 当函数有多个可选参数时，可把参数归一化为一个对象，这样就能更便捷地处理缺失的参数。
*/
function exampleFunction(options) {
    // 定义默认参数
    const defaultOptions = {
        name: 'defaultName',
        age: 0,
        isActive: false
    };

    // 合并默认参数和传入的参数
    const normalizedOptions = {
        ...defaultOptions,
        ...options
    };

    console.log(normalizedOptions.name);
    console.log(normalizedOptions.age);
    console.log(normalizedOptions.isActive);
}

// 调用函数时可以只传入部分参数
exampleFunction({ name: 'John', age: 25 });


/**
* 2. 处理不定数量的参数
* 若函数接收不定数量的参数，可把这些参数归一化为数组。
*/
function sum(...numbers) {
    // 确保所有参数都是数字
    const normalizedNumbers = numbers.map(num => parseFloat(num)).filter(num =>!isNaN(num));
    return normalizedNumbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum('1', '2', 'three')); 

/**
 * 3. 处理不同类型的参数
* 当函数能接受不同类型的参数时，可将它们归一化为统一的类型。
 * */
function processInput(input) {
    let normalizedInput;
    if (typeof input === 'string') {
        normalizedInput = input.split(',');
    } else if (Array.isArray(input)) {
        normalizedInput = input;
    } else {
        normalizedInput = [];
    }

    // 处理归一化后的输入
    normalizedInput.forEach(item => console.log(item));
}

processInput('apple,banana,orange');
processInput(['apple', 'banana', 'orange']);





