
// Write 3 JavaScript statements declaring variables for heroName, heroLevel, and heroHealth.
// Log them to the console.
// Experiment by omitting semicolons—what happens?

function statement_semicolumn() {
    var heroName = "Aria"
    let heroLevel = 5
    const heroHealth = 100
    console.log(heroName, heroLevel, heroHealth)
}
statement_semicolumn();
console.log("                                 ");
console.log("                                 ");

// Create a variable mana using let and reduce its value inside a loop.
// Create a const for MAX_HEALTH and try to change it. Observe the error.

function mana() {
    //decare the mana's health and declare max health
    let mana = 100;
    const MAX_HEALTH = 100;
    console.log(MAX_HEALTH);
    //reduce the health of mana using for loop
    for (i = 0; i <= 5; i++) {
        mana -= 10; //
        console.log("mana health", mana);
    }
}
mana();
console.log("                                 ");
console.log("                                 ");


// Declare 5 variables—each of a different type.
// Print each variable and its type using typeof.
// Predict outputs before running the code.

function diff_data_types() {
    let number = 10;
    let name = "nirjala";
    let status = true;
    let array = ['one', 'two', 'three'];
    let value = { name: "nirjala", age: '21' };
    console.log(typeof (number));
    console.log(typeof (name));
    console.log(typeof (status));
    console.log(typeof (array));
    console.log(typeof (value));
}
diff_data_types();
console.log("                                 ");
console.log("                                 ");


// Use arithmetic operators to calculate total damage from 3 attacks.
// Use logical operators to determine if a hero can cast a spell (enough mana AND alive).
// Use comparison operators to compare hero levels.

function attacks() {
    let hero = {
        name: 'Shaktiman',
        class: ' mage',
        mana: ' mind-control',
        islive: true, level: 10,
        attacks: {
            attack1: { name: 'Sword', damage: 60, class: 'mage' },
            attack2: { name: 'Sword', damage: 80, class: 'mage' },
            attack3: { name: 'Sword', damage: 90, class: 'mage' },
            attack4: { name: 'Sword', damage: 50, class: 'mage' },
            attack5: { name: 'Sword', damage: 78, class: 'mage' }
        }
    }

    let total_damage = hero.attacks.attack1.damage + hero.attacks.attack2.damage + hero.attacks.attack3.damage + hero.attacks.attack4.damage + hero.attacks.attack5.damage;
    console.log("Total Damage:", total_damage);

    if (hero.islive && hero.mana) {
        console.log("alive");
    }
    else {
        console.log("Defeted")
    }

    if (hero.level >= 80) {
        console.log("Super hero");
    }
    else {
        console.log("Weak hero");
    }
}
attacks();
console.log("                                 ");
console.log("                                 ");

// Write a function castSpell(spellName) that logs "Casting spellName".
// Rewrite it using an arrow function.
// Call it 3 times with different spells.

function castSpell(spellName) {
    console.log("castSpell: ", spellName);
}
castSpell("nirjala");
castSpell("Sahil");
castSpell("Niruuuuuu");

let cast = (spellName) => {
    console.log("Casting:" + spellName);
}
cast("nirjala");
cast("Sahil");
cast("Niruuuuuu");

console.log("                                 ");
console.log("                                 ");


// Write an if-else to check hero health and log "Alive" or "Defeated".
// Use a for loop to simulate 5 rounds of attack.
// Try a while loop that continues until mana is 0.

function health() {

    let hero = {
        name: 'Shaktiman',
        class: 'mage',
        mana: 100,
        isLive: true,
        level: 10,
        attacks: {
            attack1: { name: 'Sword', damage: 60 },
            attack2: { name: 'Sword', damage: 80 },
            attack3: { name: 'Sword', damage: 90 },
            attack4: { name: 'Sword', damage: 50 },
            attack5: { name: 'Sword', damage: 78 }
        }
    };

    //  If-else: Hero health
    if (hero.isLive && hero.mana > 0) {
        console.log("Alive");
    } else {
        console.log("Defeated");
    }

    //  For loop: 5 rounds of attack
    console.log("Attack rounds:");
    let attackList = Object.values(hero.attacks);

    for (let i = 0; i < attackList.length; i++) {
        console.log(
            `Round ${i + 1}: ${attackList[i].name} causes ${attackList[i].damage} damage`
        );
    }

    //  While loop: mana until 0
    console.log("Mana usage:");
    while (hero.mana > 0) {
        hero.mana -= 20;
        console.log("Mana left:", hero.mana);
    }

    console.log("Mana exhausted!");
}

// Call the function
health();
console.log("                                 ");
console.log("                                 ");



// Create an object weapon with name, damage, type.
// Create an array inventory and push 3 items.
// Loop through the array and log each item.

function array_loop() {
    let weapon = { name: "Sword", damage: 50, type: "Melee" };
    let inventory = ["potion", "scroll", "ring"];
    for (let item of inventory) {
        console.log(item);
    }
}
console.log("                                 ");
console.log("                                 ");



// Convert 3 traditional functions to arrow functions.
// Use an arrow function inside map() to double each number in an array:

// Traditional function
function add(a, b) {
    return a + b;
}
// Arrow function
// const add = (a, b) => a + b;
// console.log(add(3, 4));

// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);

function show() {
    // Array
    let arr = [10, 20, 30];
    let [first, second] = arr;
    console.log(first, second); // 10 20

    // Object
    let hero = { name: "Aria", level: 5 };
    let { name, level } = hero;
    console.log(name, level); // Aria 5
}
show();

console.log("                                 ");
console.log("                                 ");


// Merge two arrays of treasure items using the spread operator.
// Clone an object and add a new property.
function spread() {
    // Array spread
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4]; // [1,2,3,4]

    // Object spread
    let obj1 = { x: 1, y: 2 };
    let obj2 = { ...obj1, z: 3 }; // {x:1, y:2, z:3}
}
spread();

console.log("                                 ");
console.log("                                 ");


// Use map to increase each hero level by 1.
// Use filter to select only high-level heroes (level > 3).
// Use reduce to calculate total damage from an array of attack points.
function array_method() {
    let numbers = [1, 2, 3, 4, 5];

    // map
    let squared = numbers.map(n => n * n); // [1,4,9,16,25]

    // filter
    let even = numbers.filter(n => n % 2 === 0); // [2,4]

    // reduce
    let sum = numbers.reduce((acc, n) => acc + n, 0); // 15
}
console.log("                                 ");