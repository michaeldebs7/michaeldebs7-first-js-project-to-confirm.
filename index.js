// document.getElementById("counter").innerText = 5



// let myAge = 16;
// console.log(myAge)

// let myDogAge = myAge * 7;
// console.log(myDogAge)


// function number() {
//     console.log(42)
// }

// number()







let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function three() {
    count = 0
    countEl.innerText = count
}



let saveEl = document.getElementById("hist")



function save() {

    saveEl.innerText += count + "-"
}
















let username = "michael"


let message = "You Have Three New Notifications"

function notiMess() {
    console.log(username + ", " + message)
}

console.log(message)

notiMess()
// function increment() {
//     console.log("A button was clicked")
// }