// suppose we want to find the optimum value --let's suppose it's the maximum -- of an array on numbers:
const findOptimum = arr => Math.max(...arr);
const myArray = [22, 9, 60, 12, 4, 56];
// console.log("maximum:" + findOptimum(myArray));

/*
* The usual way depends on comparing elements with each another and picking the one that comes on top of the comparison: compare the first element with the second and keep the best of those two; then compare that value with the third element and keep the best; and keep at it until you have finished going through all the elements.
* */
const findOptimum1 = fn => arr => arr.reduce(fn);
// With this, we can easily replicate maximum- and minimum-finding functions.
const findMaximum = findOptimum1((x, y) => (x > y ? x : y));
const findMinimum = findOptimum1((x, y) => (x < y ? x : y));
console.log("findMaximum:" + findMaximum(myArray));
console.log("findMinimum:" + findMinimum(myArray));

const compareHeroes = (card1, card2) => {
    const oneIfBigger = (x, y) => (x > y ? 1 : 0);
    const wins1 = oneIfBigger(card1.strength, card2.strength) + oneIfBigger(card1.power, card2.power) + oneIfBigger(card1.tech, card2.tech);
    const wins2 = oneIfBigger(card2.strength, card1.strength) + oneIfBigger(card2.power, card1.power) + oneIfBigger(card2.tech, card1.tech);

    return wins1 > wins2 ? card1 : card2;
};

function Hero(n, s, p, t) {
    this.name = n;
    this.strength = s;
    this.power = p;
    this.tech = t;
}

const codingLeagueOfAmerica = [
    new Hero("Forceful", 20, 15, 2),
    new Hero("Electrico", 12, 21, 8),
    new Hero("Speediest", 8, 11, 4),
    new Hero("TechWiz", 6, 16, 30)
];
const findBestHero = findOptimum1(compareHeroes);
var hero = findBestHero(codingLeagueOfAmerica);// electrico is the top hero!
console.log(hero);