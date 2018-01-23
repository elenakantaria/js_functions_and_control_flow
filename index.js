function combine(word1, word2){
  return `$(word1) $(word2)`;
}
console.log(combine('hi','there'));


function isEven(n){
  return n % 2 === 0;
}
console.log(`isEven(30): ${isEven(30)}`);
console.log(`isEven(9): ${isEven(9)}`);

var n=3
function isOdd(n) {
  return n % 2 === 1;
}
console.log(`is ${n} odd? ${isOdd(3)}`);


function areEqual(a,b) {
  return a===b;
}
console.log(`is 5 equal to 6? ${areEqual(5,6)}`);

function numberToString(n){
  return (n).toString();
}
console.log(`number to string (777):${numberToString(777)}`);



function add(n1, n2) {
  return n1 + n2;
}
console.log(`add(13, 15): ${add(13, 15)}`);


function introduce(firstName, lastName) {
  console.log(`Hi my name is ${firstName} ${lastName}`);
}



function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(`hypotenuse(3, 4): ${hypotenuse(3, 4)}`);
console.log(`hypotenuse(7, 9): ${hypotenuse(7, 9)}`);

function volume(a,b,c) {
  return a*b*c ;
}
console.log(`volume(4,5,6):${volume(4,5,6)}`);



function farengheitToCelsius(temp){
  return (5/9)*(temp-32);
}
console.log(`convert 5 to celsius: ${farengheitToCelsius(5)}`);


function celsiusToFarengheit(temp){
  return (9/5)*temp+32 ;
}
console.log(`convert 30 to Farengheit :${celsiusToFarengheit(30)}`);

function troll(sentence){
  while(sentence.indexOf('crossfit')!=-1){
    sentence=sentence.replace('crossfit','jellyfish fishing')
} return sentence;}
console.log(troll('first crossfit, second crossfit, third crossfit'));


//second part

function calculate(operation,x,y){
  return
}

function minimum(x, y) {
  return x < y ? x : y;

}
console.log(`minimum(7, 8): ${minimum(7, 8)}`);
console.log(`minimum(12,12): ${minimum(12, 12)}`);



function maximum(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(`maximum(12, 15): ${maximum(12, 15)}`);
console.log(`maximum(13, 11): ${maximum(13, 11)}`);


function letterGrade(score,total){
  if(total<=||score>total)
  throw 'Error! Total parameter must be>0,score must be >=0 and total must be greater than score';

  var grade=score/total;

  if(grade <=0.59)
  return'F';
else if(grade<=0.69)
return'D';
else if(grade<=0.79)
return'C';
else if(grade<=0.89)
return 'B';
else return 'A';

}

function convertTemperature(temp,scale){
  if(scale=='f'){
    return 9/5*(temp-32);
  } else if(scale=='c'){
    return temp;
  } else
  throw 'Error!Scale must be"c" of "f"';

}
