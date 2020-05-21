'use strict';
class RandomArr {
    constructor(itemsAmount = 5) {
        this.itemsAmount = itemsAmount;
        this.randomArr = [];
    }
    // каждые раз при получении randomArr генерируется новый массив
    // get randomArr() {
    //   let arr = [];
    //   for (let num of this) {
    //     arr.push(num); // 1, затем 2, 3, 4, 5
    //   }
    //   return arr;
    // },

    // массив randomArr генерируется один раз при вызове метода putInRandomAr
    putInRandomAr() {
            this.randomArr.length = 0;
            for (let num of this) {
                this.randomArr.push(num);
            }
            return this.randomArr;
        }
        [Symbol.iterator]() {
            this.counter = 0;
            return this;
        }
    next() {
        if (this.counter < this.itemsAmount) {
            this.counter++
            return {
                done: false,
                value: Math.ceil(Math.random() * 100)
            };
        } else {
            return {
                done: true
            };
        }
    }
};
export default RandomArr;