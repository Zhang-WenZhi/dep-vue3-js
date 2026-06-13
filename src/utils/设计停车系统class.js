/*
LeetCode 1603. 设计停车系统
题目描述
请你给一个停车场设计一个停车系统。停车场总共有三种不同类型的车位：大，中和小，每种车位分别有固定数目。
ParkingSystem(int big, int medium, int small)：初始化三种车位数量
bool addCar(int carType)：
carType = 1：大车，占用大车位
carType = 2：中型车，占用中车位
carType = 3：小车，占用小车位
对应车位有剩余则车位 - 1，返回true；无车位返回false
*/
class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType) {
        let space;
        switch(carType) {
            case 1: space = this.big; break;
            case 2: space = this.medium; break;
            case 3: space = this.small; break;
        }
        if (space <= 0) return false;
        // 车位减一
        carType === 1 ? this.big-- : carType === 2 ? this.medium-- : this.small--;
        return true;
    }
}