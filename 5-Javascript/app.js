// introduction to arrays
let superheros = ["spider-man", "wonder woman", "superman", "antman", "batman"];
console.log("Hero 1 is", superheros[0]);
console.log("Hero 5 is", superheros[4]);

// let superheros = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"];

superheros[2] = "doctor strange";
console.log(superheros);

// push method adds new value that you type in
superheros.push("deadpool")
console.log(superheros);
// pop can stay empty cause it auto removes last one
superheros.pop();
console.log(superheros);
// array iteration with a for loop
for (let i = 0; i <= 4; i ++) {
    console.log("Hero ", i, "is", superheros[i]);

}
// for each method
superheros.forEach(function(hero) {
    console.log("Hero is", hero);
});

// array methods
console.log("Array length is", superheros.length);

// index of one of the items. if it doesn't exist it returns a -1.
console.log("Index of wonder woman is", superheros.indexOf("wonder woman"));

// joined array and use a separator
console.log("Joined array", superheros.join("-"));

// slice method uses first parameter is the starting index and second is the last item to remove. this one removes item 1 and keeps the others beyond item 4.
let slicedArray = superheros.slice(1, 4)
console.log(slicedArray);