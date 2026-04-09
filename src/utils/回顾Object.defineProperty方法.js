let obj = {
    x: 100
}

let obj2 = {
    y: 200
}

// Object.defineProperty(obj, 'x', {
//     value: 100,
//     writable: false,
//     configurable: false,
//     enumerable: true
// })

// Object.defineProperty(obj, 'y', {
//     value: 200,
//     writable: false,
//     configurable: false,
//     enumerable: true
// })

// Object.defineProperty(obj, 'z', {
//     get: function() {
//         return obj2.y
//     }
// })


// 数据代理：通过一个对象代理另一个对象中属性的操作（读/写）
Object.defineProperty(obj2, 'x', {
    get: function() {
        return obj.x
    },
    set: function(value) {
        console.log("修改obj.x的值")
        obj.x = value
    }
})

console.log(obj2.x) // 100
console.log(obj.x) // 100
console.log(obj2) // { y: 200, x: [Getter/Setter] }
obj2.x = 300
console.log(obj.x) // 300 // obj2 通过defineProperty代理了obj.x的读写操作

// vue2 中的数据代理