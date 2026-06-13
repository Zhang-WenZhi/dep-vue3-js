// 第四点: 严格模式
'use strict';
/**
 * functioin ParkingSystem(big, medium, small) {} 也可以
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    // 第一点：只能new
    if (new.target === undefined) {
        throw new TypeError(
            `Class construction ParkingSystem cannot be invoked without 'new'`
        );
    }
    this.big = big;
    this.medium = medium;
    this.small = small;
    // index 0 占位，1/2/3对应三种车型
    this.spaces = [0, big, medium, small];
};

// 原型方法通用配置：复刻 class 原型属性描述符
// class 原型方法：enumerable: false / writable: true / configurable: true
// 只要你手动传入任意一个描述符（比如只写了 enumerable: false），剩下所有描述符会自动填充为 false，不会沿用对象原有默认值。
const classProtoConfig = {
    enumerable: false,  // class方法for-in遍历不到，必须手动关
    writable: true,     // class原型方法允许重写覆盖：解除只读，允许你后面 prototype.addCar = xxx 覆盖；
    configurable: true  // class原型方法允许删除、重定义：允许后续重新定义 / 删除该方法，和 ES6 Class 行为对齐
    // configurable 控制三件事：
    // 是否能删除该属性 delete ParkingSystem.prototype.addCar
    // 是否能再次调用 Object.defineProperty 修改这个属性
    // 是否能修改 enumerable 开关
};

// 第二点: 方法不可被遍历
Object.defineProperty(ParkingSystem.prototype, 'addCar', {
    value: function () {
        // 第三点: new ParkingSystem.prototype.addCar() 报错，设置
        if (new.target === undefined) {
            throw new TypeError(
                `Class construction ParkingSystem cannot be invoked without 'new'`
            );
        }
        console.log(this.spaces);
    },
    ...classProtoConfig,
});
Object.defineProperty(ParkingSystem.prototype, 'addCar2', {
    value: function () {
        if (new.target === undefined) {
            throw new TypeError(
                `Class construction ParkingSystem cannot be invoked without 'new'`
            );
        }
        console.log(this.spaces);
    },
    ...classProtoConfig,
});

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 1) {
        if (this.big > 0) {
            this.big--;
            return true;
        }
    } else if (carType === 2) {
        if (this.medium > 0) {
            this.medium--;
            return true;
        }
    } else if (carType === 3) {
        if (this.small > 0) {
            this.small--;
            return true;
        }
    }
    return false;
};

/** 
 * 用车位类型作为数组下标，省去大量if/switch判断
 * @param {number} carType
 * @return {boolean}
 * @summary 用车位类型作为数组下标，省去大量if/switch判断
 * ⚠️ 部分老旧代码文档工具（旧版 JSDoc 3）对 @summary 支持较弱，优先用首行摘要更稳妥。
 */
ParkingSystem.prototype.addCar2 = function (carType) {
    if (this.spaces[carType] > 0) {
        this.spaces[carType]--;
        return true;
    }
    return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// 初始化：1个大车位，1个中车位，0个小车位
// ====================== 测试用例 ======================
const park = new ParkingSystem(1, 1, 0);
console.log(park.addCar(1));  // true
console.log(park.addCar(2));  // true
console.log(park.addCar(3));  // false
console.log(park.addCar(1));  // false

// 1. 验证约束：不 new 直接调用构造函数（取消注释测试，会报错）
// ParkingSystem(1,2,3);

// 2. 验证约束：new 调用原型方法（取消注释测试，会报错）
// new park.addCar(1);

// 3. 验证约束：原型方法不可枚举（for...in 只会输出 spaces）
for (const key in park) {
    console.log('遍历到key：', key);
}

// 4. 验证约束：原型方法可重写（上方已经重写 addCar，无报错）