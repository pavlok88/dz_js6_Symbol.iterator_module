'use strict';
// 1.   Создать класс. С помощью глобально доступной константы Symbol.iterator 
// реализуйте вывод массива.
// при использовании Symbol.iterator Вам необходимо  сгенерировать массив и вывести его.
//  Генерировать Вы можете используя счетчик с началом и концом отчета 
//  или назначать рандомные значения. 
/* 
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
}

const objRand = new RandomArr(9);
console.log(objRand);
console.log(objRand.randomArr);
console.log(objRand.putInRandomAr());
console.log(objRand.randomArr);
 */
// 2.   Реализация задания 1 в модуле, используя директивы export и import
import RandomArr from './rand.js'
const objRand = new RandomArr(9);
console.log(objRand);
console.log(objRand.randomArr);
console.log(objRand.putInRandomAr());
console.log(objRand.randomArr);
// 3.   Создайте форму с элементами пользовательского ввода.
//  Подсвечиваете границу элемента голубым при наведении курсора мыши 
//  и установите фон (например тот же синий) при нажатии на элемент.
// P.S используйте события focusin/focusout при обработке события 
// (addEventListener)

const form = document.querySelector('#loginForm');
form.addEventListener('mouseover', (e) => {
  if (e.target != form) e.target.classList.add('mouseoverStyle')
})
form.addEventListener('mouseout', (e) => {
  e.target.classList.remove('mouseoverStyle')
})
form.addEventListener('focusin', (e) => {
  e.preventDefault();
  e.target.classList.add('fucusStyle')
})
form.addEventListener('focusout', (e) => {
  e.preventDefault();
  e.target.classList.remove('fucusStyle')
})

// 4*   Создайте набор карточек. реализуйте опцию удаления 
// (пример: (используйте любую тему))

const cardCollection = document.querySelectorAll('.close');
cardCollection.forEach(i => i.addEventListener('click', e => e.target.parentNode.remove()))