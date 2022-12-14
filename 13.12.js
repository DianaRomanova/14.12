function f2(){
    console.log(2);
    return 12
}
f2();
console.log (f2() + 6);

function  randInt(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let r = randInt(222,333);
//console.log(r);
//function randomInt(){
  //  console.log('randon int 555')

}
//let min = 100;
//let max = 200;

function  rand(){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
rand();
min =5;
max =15;
rand();
