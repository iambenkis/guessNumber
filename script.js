let toDisplay =  document.querySelector('.mynumber')
let isNumber = document.querySelector('.numberis')
let myNumber = document.querySelector('.foundnumber')
let highscore = document.querySelector('.highscore')
let inNumber = document.querySelector('.innumber');
let checkBtn  = document.querySelector('.check')
let againBtn  = document.querySelector('.again')
 
const max = 20,min = 1;
let toScore = Number(myNumber.textContent); 
let randNumber = Math.floor(Math.random() * (max - min) ) + min
highscore.textContent = '0'

function numberRange (a , b){
    if (a > b){ 
        return 'Too low'
    }
    else if( a < b){
        return 'Too high'
    }
}

checkBtn.addEventListener ('click',()=>{
    
    if(!inNumber.value){
        isNumber.textContent= '⛔️ No number'
        toDisplay.textContent = '?';
        document.querySelector('body').style.backgroundColor = '#333'
    }
   else if (inNumber.value == randNumber){
        isNumber.textContent= 'correct number'
        myNumber.textContent = ++toScore
        highscore.textContent = myNumber.textContent
        toDisplay.textContent = inNumber.value;
        document.querySelector('body').style.backgroundColor = 'green'
        randNumber = Math.floor(Math.random() * (max - min) ) + min
     }else{
        isNumber.textContent = `${numberRange(Number(randNumber),Number(inNumber.value))}`
        myNumber.textContent = --toScore
        toDisplay.textContent = '?';
        document.querySelector('body').style.backgroundColor = '#333'
     }

     console.log(randNumber)
console.log(inNumber.value)
console.log(numberRange(Number(randNumber),Number(inNumber.value)))
})






