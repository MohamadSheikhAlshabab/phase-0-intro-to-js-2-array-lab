let cats = ["Milo", "Otis", "Garfield"];

beforeEach =  () => {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
};
beforeEach();

function destructivelyAppendCat(name){
    cats.push(name);
};

destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name)
}

destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
};

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}

destructivelyRemoveFirstCat()

function appendCat(name) {
    let newCats = [...cats]
    newCats.push(name);
    return newCats;
}
appendCat("Broom");

function prependCat(name){
    let newCats = [...cats]
    newCats.unshift(name);
    return newCats;
};
prependCat("Arnold");

function removeLastCat(){
    let newCats = [...cats]
    newCats.pop();
    return newCats;
}
removeLastCat();

function removeFirstCat(){
    let newCats = [...cats]
    newCats.shift();
    return newCats;
}
removeFirstCat();