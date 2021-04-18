/*const bloc = document.querySelector('.container1')
bloc.classList.add("hero-slider")
bloc.classList.remove("hero-slider")
console.log(bloc);

let et = document.querySelector(".after")
et.classList.toggle("after")
et.classList.contains("after")
console.log(et);

let net = document.querySelector(".befor")
/*console.log(net.id);
console.log(net.title);
console.log(net.className);

net.className = 'good';
console.log(net);

const btn = document.querySelector(".btn")
btn.onclick=function () {
    alert('hello')
}
console.log(btn);

//делаем событие
/*const qq = document.querySelector(".bot")
let aa = (ww) => {
    let input = document.getElementById("inp")
    input.value = "Misha"
}
qq.addEventListener("click", aa)*/

/*const qq = document.querySelector(".bot")
let aa = () => {
    let input = document.getElementById("inp")
    alert(input.value * input.value) 
}
qq.addEventListener("click", aa)*/

//кнопки меняются местами
/*const qq = document.querySelector('.bot')
let aa = () => {
    let input = document.getElementById("inp")
    let input1 = document.getElementById("in")
    let tt = input.value
    input.value = input1.value
    input1.value = tt
}
qq.addEventListener("click", aa)*/

//5 task
let btn = document.querySelector('.btn')
let hi = () => {
    let input = document.getElementById('changed')
    alert(input.value)
}
btn.addEventListener("click", hi)

//6 task
let btn1 = document.querySelector(".btn1")
let someText = () => {
    let input1 = document.getElementById("changed1")
    input1.value = "Ой, текст изменился"
}
btn1.addEventListener("click", someText)

//7task
let btn2 = document.querySelector(".btn2")
let picture = () => {
    let img = document.querySelector(".img1")
    img.src = "../new-project/img/Line.png";
}
btn2.addEventListener("click", picture)

//8task
let btn3 = document.querySelector('.btn3')
let hihi = () => {
    let input = document.getElementById('changed3')
    input.style.color = 'red'
    input.style.width = '300px'
}
btn3.addEventListener("click", hihi)

//9 task
let block1 = () => {
    let input1 = document.getElementById("changed4");
    input1.disabled = true;
}
let block2 = () => {
    let input1 = document.getElementById("changed4")
    input1.disabled = false;
}

//10 task

let btn6 = document.querySelector(".btn6")
let someFunc = () => {
    let input = document.getElementById("color")
    input.value = 'теперь красный'
    input.style.color = 'red'
    input.style.width = '300px'
    input.style.height = '100px'
    input.style.borderRadius = '30px'
}
btn6.addEventListener("click", someFunc)

//11task ???
let fun = () => {
    let input = document.querySelector(".new")
    input.setAttribute('disabled', 'disabled')
    let newInput = document.createElement('input')
    newInput.type = 'submit'
    newInput.value = 'теперь на меня'
    newInput.classList.add('newInp')
    document.body.appendChild(newInput)
}

//12 task ???
let clicks = 0;
let click = () => {
    let size = document.querySelector(".size")
    size.style.width = '300px'
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks
}
addEventListener("click", click)

//13 task ??
let btn7 = document.querySelector(".btn7")
let change =  () => {
    let input = document.getElementById("changed5")
    input.value = 'теперь слева'
    input.style.width = "200px"
    input.style.marginRight = "100px"
    let qq = btn7.value
    btn7.value = input.value
    input.value = qq
}
btn7.addEventListener("click", change)


//14 task 

let bnt = document.getElementById("bnt")
let changeStyle = () => {
    let input = document.querySelector(".eeeBoy")
    input.value = `my CSS class: ${input.className}`
}
bnt.addEventListener("click", changeStyle)

//15 task 
const btn8 = document.querySelector(".touche")
let touche = () => {
    let hi = document.getElementById("hi")
    let bye = document.getElementById("bye")
    let ww = hi.value
    hi.value = bye.value
    bye.value = ww
}
btn8.addEventListener("click", touche)

//16 task 

let bnt1 = document.querySelector(".touch")
let foo = () => {
    let num = document.querySelector(".num")
    let number = document.querySelector(".number")
    number.value = num.value * num.value
}
bnt1.addEventListener("click", foo)

//17 task ???

let bnt2 = document.querySelector(".to")
let foo1 = () => {
    let num1 = document.querySelector(".num1")
    let n = document.querySelector(".n")
    n.value = num1.value * num1.value
    if(num1 === Number){
        return n.value
    }else if (num1 === NaN){
         alert("dddddddd")
    }
}
bnt2.addEventListener("click", foo1)

//18 task

let touc = () => {
    let btn9 = document.getElementById("touch")
    btn9.setAttribute('disabled', 'disabled')
    btn9.style.cursor = "not-allowed"
}

//19 task????

let buto = document.querySelectorAll(".val")
let somV = () => {
    let input = document.getElementById("some")
    input.value === butto.value
}
buto.addEventListener("click", somV)