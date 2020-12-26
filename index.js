/*
const idMain1 = document.getElementById('main-1');
const idListMenu1 = document.getElementById('list-1');
const idBttn = document.getElementById('bttn');
const h31 = document.getElementById('h31');

function chover (id) {
    
    //idListMenu.classList.toggle("myHover");
    //idListMenu1.style.visibility = 'visible';
    id.style.backgroundColor = 'rgb(127, 255, 212)';

}
function cleave(id,h) {
    //idListMenu1.style.visibility = 'hidden';
    id.style.visibility = 'hidden';
    h.style.backgroundColor = "rgb(167, 224, 205)";
} 
function clickMenu() {
    const idShowToggle = document.getElementById('showToggle')
    idShowToggle.classList.toggle("showCase");
    
}
idMain1.addEventListener('mouseover',function(){ chover(h31) });
idMain1.addEventListener('mouseleave',function(){ cleave(idListMenu1,h31) });
idMain1.addEventListener('click',function(){ clickMenu(idListMenu1) });
idBttn.addEventListener("click",clickMenu);*/

/*
function clickMenu(id) {
    //document.getElementsByClassName('list').style.visibility = 'hidden';
    const idListMenu = document.getElementById(id);
    //idListMenu.classList.toggle("listToggle");
    if(idListMenu.style.visibility !== 'hidden') {
        idListMenu.style.visibility = 'hidden';
    }else{
        idListMenu.style.visibility = 'visible';
    }
}
function outMenu(x) {
    const idX = document.getElementById(x);
    if(idX.style.visibility !== 'hidden'){
        idX.style.visibility = 'hidden';
    }
    
}
const idMain1 = document.getElementById('main-1');
idMain1.addEventListener("click",function(){clickMenu('list-1')});
idMain1.addEventListener("mouseout",function(){outMenu('list-1')});
const idMain2 = document.getElementById('main-2');
idMain2.addEventListener("click",function(){clickMenu('list-2')});
idMain2.addEventListener("mouseout",function(){outMenu('list-2')});
const idMain3 = document.getElementById('main-3');
idMain3.addEventListener("click",function(){clickMenu('list-3')});
idMain3.addEventListener("mouseout",function(){outMenu('list-3')});
//* *****test-regex*********Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);
console.log(result);
let vowelRegex  = /[aeiou]/ig;
let resultOfVowel = quoteSample.match(vowelRegex);
console.log(`resultOfVowel :${resultOfVowel}`);
document.getElementById("result").innerHTML = resultOfVowel;*/
