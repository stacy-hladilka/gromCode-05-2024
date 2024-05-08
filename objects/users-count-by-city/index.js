"use strict";

/**
 * @param {object[]} users
 * @return {object}
 */
function usersCountByCity(users) {
  // put your code here
  const newObj = {};
  for (const element of users) {
    if (newObj[element.city] === undefined) {
      newObj[element.city] = 1;
    } else {
      newObj[element.city] += 1;
    }
  }
  return newObj;
}

// examples
const users = [
  {
    id: 888,
    name: "Denis",
    age: 44,
    city: "Kyiv",
  },
  {
    id: 333,
    name: "Alex",
    age: 33,
    city: "Lviv",
  },
  {
    id: 392,
    name: "Nastya",
    age: 22,
    city: "Kyiv",
  },
  {
    id: 123,
    name: "Violetta",
    age: 15,
    city: "Odesa",
  },
  {
    id: 640,
    name: "Mykola",
    age: 31,
    city: "Lviv",
  },
];

const copy1 = [...users];
const copy2 = [...users];
const copy3 = [...users];

const first = usersCountByCity(users);
const second = usersCountByCity(copy1);
const third = usersCountByCity(copy2);
const fourth = usersCountByCity(copy3);
