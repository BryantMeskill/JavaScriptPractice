const findTheOldest = function (array) {
  //compares two people's age and returns the oldest between the two
  return array.reduce(function (lastPerson, currentPerson) {
    const oldestAge = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    //if oldest is less than current age, return currentPerson. otherwise, return oldPerson
    return oldestAge < currentAge ? currentPerson : lastPerson;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    //if there has been no death
    death = new Date().getFullYear(); //get the current year using local time
  }
  return death - birth; //gets current age
};
// Do not edit below this line
module.exports = findTheOldest;
