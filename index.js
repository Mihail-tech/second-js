/*let str = "aaa@bbb@ccc"
console.log(str.replace(/@/g, "!"));

let str1 ="aaa bbb ccc"
console.log(str1.slice(4, 8));
console.log(str1.substr(4, 4));
console.log(str1.substring(4, 8));

let name = "js"
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let nameStr = '123456'
nameStr.split('').reverse().join('');
console.log(nameStr);

let strHTML = "index.html"
let checkHTML = (b) => {
b.substr(5, 9) ===".html"
return b.substr(5, 9) ===".html"
}
console.log(checkHTML(strHTML));

let num = 3
let number = 2
let numCube = (cub) => {
    return cub * cub * cub
    
}
console.log(numCube(num));
console.log(numCube(number));

let numTrue = 8
let isEven = (a) => {
    return a % 2 === 0
}
console.log(isEven(numTrue));

let user = {
    name: "Misha",
    isAdmin: true,
    age: 25
}
console.log(user); //выводит весь объект

console.log(user.isAdmin); //выводит тру

delete user.age // удаляем возраст
console.log(user);

console.log(user['name']); // выводим имя(значение ключа)

console.log("isAdmin" in user); //показывает есть ли значение в объекте

for(key in user) {
    console.log(user[key]); //бегаем по объекту
}

let popul = {
    cat: 50,
    dog: 'Corgy',
    count: 4
}
delete popul.count //удалем значение
console.log(popul);

popul.cat = 'skiing' // заменяем значение
console.log(popul);

console.log(Object.keys(popul)); //узнать все ключи

popul.password = '123' //добовлем новый ключи и значение
console.log(popul);*/

//1 task
let dayWeek = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
}
console.log(dayWeek[1]);

//2 task
let day = {
    day1: 'Monday',
    day2: "Sunday"
}
console.log([Object.entries(day)]);

//3 task хз 2 решения, но второе работает лучше и точнее
// 1-ое делал сам, 2-ое из интернета, если будешь смотреть расскажи в чем разница

let arrObj = [1, 2, 3]

//1 способ
let isPlainObject = (el) => {
    if (el === null) {
        return false;
    } else if (el === undefined) {
        return false;
    }
    return ((typeof el === 'object') || (typeof el === 'function'));
}
console.log(isPlainObject(arrObj));


//2 способ
let isPlainObj2 = (elem) => {
    return (typeof elem === "object" && !Array.isArray(elem) && elem !== null);
}
console.log(isPlainObj2(arrObj));


// 4 task как понял так и сделал

let animal = {
    sheep: 23,
    tiger: 10,
    elefant: 5,
    pig: 8
}
console.log(animal);


let animalFunc = (del) => {
    for(key in del){
        console.log(del[key]);
    }
    return del
}
animalFunc(animal)
console.log(Object.create(animal, {}));


//5 task

let firstObj = {
    q: 1,
    a: 2
}
let secondObj = {
    q: 1,
    a: 2
}

let isEqual = (firstObj, secondObj) => {
    let firstObj1 = Object.keys(firstObj);
    let secondObj1 = Object.keys(secondObj);
  
    if (firstObj1.length !== secondObj1.length) {
      return false;
    }
  
    return !firstObj1.filter((key) => firstObj[key] !== secondObj[key]).length;
  }
console.log(isEqual(firstObj, secondObj));



//6 task
let firstOb = {
    a: 1,
    b: 2,
    c: 3
}
let secondOb = {
    d: 1,
    e: 2,
    c: 4
}


let equal = (firstOb, secondOb) => {
    let firstObKeys = Object.keys(firstOb);

    return firstObKeys.reduce((acc = {}, key) => {
        if (firstOb[key] === secondOb[key]) {
          acc = {
            ...acc,
            [key]: firstOb[key],
          };
        }
    
        return acc;
    }, {});
}
console.log(equal(firstOb, secondOb));



/*let ee = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let result = Math.round((now - today) / 1000);
    return result
}
console.log(ee());


let text = "This website is for losers LOL!"
let test = (qq) => {
  return qq.map(x => x.replace(/[eio]/g, ''))
}
test(text);
console.log(test)*/

