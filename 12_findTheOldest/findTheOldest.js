// const findTheOldest = function(peoples) {
//     const sorted = peoples.sort((a, b) => {
//         const aYod = a.yearOfDeath ?? new Date().getFullYear();
//         const bYod = b.yearOfDeath ?? new Date().getFullYear();
//         aAge = aYod - a.yearOfBirth;
//         bAge = bYod - b.yearOfBirth;
//         return aAge < bAge ? 1 : -1;
//     });
//     return sorted[0];
// };

const findTheOldest = function(peoples) {
    const oldestPeople = {'age': 0}
    const oldest = peoples.reduce((oldestPeople, people, i) => {
        const peopleYearOfDeath = people.yearOfDeath ??= new Date().getFullYear();
        const peopleAge = peopleYearOfDeath - people.yearOfBirth
        if (peopleAge > oldestPeople.age) {
            oldestPeople.obj = people;
            oldestPeople.age = peopleAge;
        }
        return oldestPeople;
    }, oldestPeople);
    console.log(oldestPeople);
    return oldest.obj;
};

// Do not edit below this line
module.exports = findTheOldest;
