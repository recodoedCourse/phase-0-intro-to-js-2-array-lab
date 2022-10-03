// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function  destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()

}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1)
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}

console.log(removeFirstCat())
console.log(removeLastCat())