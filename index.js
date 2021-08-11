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

function clearHist() {
    saveEl.innerText = " "
}



