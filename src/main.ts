import './style.css'
import './basic/1'
import './basic/2'
import './basic/3'
import './basic/4'
import './basic/5'
import './basic/6'
import './basic/7'
import './generics/1'
import './generics/2'
import './generics/3'
import './generics/4'
import './generics/5'
import './generics/6'

/* function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(1, 2)); */

//-----------------------------------------------------

/* function foo (num: number, str: string, bool: boolean, empty: null) {
  // Some logic
} */

// якщо ми задаємо значення за замовчуванням у функції, тип вказувати не потрібно:

/* function foo (num = 10, str = 'Some string', bool = true, empty = null){
  // Some logic
} */

//-----------------------------------------------------
// Object

// const obj: object = {}; 
// теж саме можемо написати так: const obj: {} = {};

/* let user: { name: string; age: number } = {
  name: "Tom",
  age: 30
}; */

/* let user: { name: string; age: number } = {
  age: 30,
}; // - отримали помилку через те, що відсутня властивість name

let userNameLikeNumber: { name: string; age: number } = {
  name: 10,
  age: 30,
}; // - отримали помилку, тому що там використовується неправильний тип даних

export {}; */

// Можемо винести тип окремо за допомогою ключового слова type:

/* type User = {
  name: string;
  age: number;
};

let user: User = {
  name: 'Tom',
  age: 30,
};

let userJack: User = {
  name: 'Jack',
  age: 25,
};

export {}; */

// Тут User — це наш власний тип, який ми створили для представлення користувача. Ми можемо використовувати цей тип скрізь, і ми використали його для двох змінних: user та userJack.
 
// Крім того, ми можемо використати interface для визначення об'єкта:
/*   interface User {
  name: string;
  age: number;
}

let user: User = {
  name: 'Tom',
  age: 30,
};

export {}; */
// В цьому разі немає суттєвої різниці між type та interface, у майбутніх блоках ми розберемо їх докладніше.

//-----------------------------------------------------
// Array

// let arrString: string[];

//Якщо ми спробуємо передати в нього не рядковий тип даних, ми отримаємо помилку:
/* let arrString: string[];

arrString = ['Text', 1];

export {}; */

// let arrNumber: number[];

/* let arrNumber: number[];

arrNumber = [1, 'Text'];

export {}; */

// Крім того, масиви в TypeScript можуть бути багатовимірними. Наприклад:

// let matrix: number[][] = [[1, 2], [3, 4]]; - масиви в TypeScript можуть бути багатовимірними
// let mixed: (number | string)[] = [1, 'two']; - можуть містити елементи різних типів
// let numbers: Array<number> = [1, 2, 3, 4, 5]; - також можемо вказати тип масиву через узагальнення (generic)

// Можна визначити масив об'єктів:
/* let users: {
    name: string;
    age: number;
}[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
]; */
// Або з використанням більш зручного запису:
/* type User = {
    name: string;
    age: number;
};

let users: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
]; */

/* type User = {
  name: string;
  age: number;
};

let users: User[] = [{ name: 'Tom', age: '30' }];

export {}; */

// Тепер якщо якесь значення об'єкта буде не того типу, ми отримаємо помилку.
// Це демонструє всю силу суворої типізації. 
// Але іноді нам це не потрібно, і тоді ми можемо скористатися типом даних any:
// let arrAny: any[]; - У такому масиві можна зберігати будь-що.

/* let arrAny: any[];

arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

export {}; */
// Але не варто зловживати any, інакше TypeScript швидко перетвориться на JavaScript :)

// Any — це тип даних, який використовується, коли ви не знаєте, який тип даних може міститися у змінній
/* let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};

let num: number;

num = notSure;

export {}; */

/* let fixed: [string, number];

fixed = ['Text', 10];

fixed.push('New string');

console.log(fixed);

export { }; */
