myStorage = window.localStorage;


var currentDay = document.querySelector("#currentDay")
var nineam = document.querySelector("#nineam")
var tenam = document.querySelector("#tenam")
var elevenam = document.querySelector("#elevenam")
var twelvepm = document.querySelector("#twelvepm")
var onepm = document.querySelector("#onepm")
var twopm = document.querySelector("#twopm")
var threepm = document.querySelector("#threepm")
var fourpm = document.querySelector("#fourpm")
var fivepm = document.querySelector("#fivepm")


//----------------------------------------------------------------------
//Providing the time sensitivity to app---------------------------------
//----------------------------------------------------------------------

currentDay.textContent = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentTime = moment().format("h")
console.log(currentTime)


if (currentTime == 9) {
    tenam.classList.add('future');
    onepm.classList.add('future');
    elevenam.classList.add('future');
    twelvepm.classList.add('future');
//current time----------------------
    nineam.classList.add('present');
    nineam.classList.remove('past');
    nineam.classList.remove('future');
//-----------------------------------
    twopm.classList.add('future');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
}

if (currentTime == 10) {
    nineam.classList.add('past');
    onepm.classList.add('future');
    elevenam.classList.add('future');
    twelvepm.classList.add('future');
//current time----------------------
    tenam.classList.add('present');
    tenam.classList.remove('past');
    tenam.classList.remove('future');
//-----------------------------------
    twopm.classList.add('future');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
}

if (currentTime == 11) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    onepm.classList.add('future');
    twelvepm.classList.add('future');
//current time----------------------
    elevenam.classList.add('present');
    elevenam.classList.remove('past');
    elevenam.classList.remove('future');
//-----------------------------------
    twopm.classList.add('future');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
}

if (currentTime == 12) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    onepm.classList.add('future');
//current time----------------------
    twelvepm.classList.add('present');
    twelvepm.classList.remove('past');
    twelvepm.classList.remove('future');
//-----------------------------------
    twopm.classList.add('future');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
}

if (currentTime == 1) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    twelvepm.classList.add('past');
//current time----------------------
    onepm.classList.add('present');
    onepm.classList.remove('past');
    onepm.classList.remove('future');
//-----------------------------------
    twopm.classList.add('future');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
}

if (currentTime == 2) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    twelvepm.classList.add('past');
//current time----------------------
    twopm.classList.add('present');
    twopm.classList.remove('past');
    twopm.classList.remove('future');
//-----------------------------------
    onepm.classList.add('past');
    threepm.classList.add('future');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
} 

if (currentTime == 3) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    twelvepm.classList.add('past');
//current time----------------------
    threepm.classList.add('present');
    threepm.classList.remove('past');
    threepm.classList.remove('future');
//-----------------------------------
    twopm.classList.add('past');
    onepm.classList.add('past');
    fourpm.classList.add('future');
    fivepm.classList.add('future');
} 

if (currentTime == 4) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    twelvepm.classList.add('past');
//current time----------------------
    fourpm.classList.add('present');
    fourpm.classList.remove('past');
    fourpm.classList.remove('future');
//-----------------------------------
    twopm.classList.add('past');
    threepm.classList.add('past');
    onepm.classList.add('past');
    fivepm.classList.add('future');
}

if (currentTime == 5) {
    nineam.classList.add('past');
    tenam.classList.add('past');
    elevenam.classList.add('past');
    twelvepm.classList.add('past');
//current time----------------------
    fivepm.classList.add('present');
    fivepm.classList.remove('past');
    fivepm.classList.remove('future');
//-----------------------------------
    twopm.classList.add('past');
    threepm.classList.add('past');
    fourpm.classList.add('past');
    onepm.classList.add('past');
}
//----------------------------------------
//End of time code------------------------
//----------------------------------------
//Save to Local Storage Portion-----------
//----------------------------------------
//Vars------------------------------------
var savenine = document.querySelector("#savenine");
var saveeleven = document.querySelector("#saveeleven");
var saveten = document.querySelector("#saveten");
var savetwelve = document.querySelector("#savetwelve");
var saveone = document.querySelector("#saveone");
var savetwo = document.querySelector("#savetwo");
var savethree = document.querySelector("#savethree");
var savefour = document.querySelector("#savefour");
var savefive = document.querySelector("#savefive");

//Local storage functions for each btn--------------
savenine.addEventListener("click", function() {
    console.log(nineam.value)
    localStorage.setItem('ninevalue', nineam.value)
});

nineam.value = localStorage.getItem('ninevalue');

//--------------------------------------------------

saveten.addEventListener("click", function() {
    console.log(tenam.value)
    localStorage.setItem('tenvalue', tenam.value)
})

tenam.value = localStorage.getItem('tenvalue');

//--------------------------------------------------

saveeleven.addEventListener("click", function() {
    console.log(elevenam.value)
    localStorage.setItem('elevenvalue', elevenam.value)
})

elevenam.value = localStorage.getItem('elevenvalue');

//----------------------------------------------------

savetwelve.addEventListener("click", function() {
    console.log(twelvepm.value)
    localStorage.setItem('twelvevalue', twelvepm.value)
})

twelvepm.value = localStorage.getItem('twelvevalue');

//----------------------------------------------------

saveone.addEventListener("click", function() {
    console.log(onepm.value)
    localStorage.setItem('tenvalue', tenam.value)
})

onepm.value = localStorage.getItem('onevalue');

//-------------------------------------------------------

savetwo.addEventListener("click", function() {
    console.log(twopm.value)
    localStorage.setItem('twovalue', twopm.value)
})

twopm.value = localStorage.getItem('twovalue');

//3PM----------------------------------------------------

savethree.addEventListener("click", function() {
    console.log(threepm.value)
    localStorage.setItem('threevalue', threepm.value)
})

threepm.value = localStorage.getItem('threevalue');

//4PM-----------------------------------------------------

savefour.addEventListener("click", function() {
    console.log(fourpm.value)
    localStorage.setItem('fourvalue', fourpm.value)
})

fourpm.value = localStorage.getItem('fourvalue');

//5PM------------------------------------------------------

savefive.addEventListener("click", function() {
    console.log(fivepm.value)
    localStorage.setItem('fivevalue', fivepm.value)
})

fivepm.value = localStorage.getItem('fivevalue');