
let count = 0
let savedEn = document.getElementById("saved-en")
let countEl = document.getElementById("count-el")

function increment() {
  count++
  countEl.textContent = count 
  
}

function save() {
  saved = " - " + count
  savedEn.textContent += saved 
  countEl.textContent = 0
  count = 0
}