const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "Angelica", age: 19, sallary: 500, driverLicense: false },

  { name: "Giovana", age: 20, sallary: 2000, driverLicense: true },

  { name: "Kleber", age: 40, sallary: 3000, driverLicense: true },

  { name: "Ewerton", age: 20, sallary: 3000, driverLicense: true },
];

const reversedData = data.reverse();

console.log(reversedData);

const highSallary = 5000;

const highestSallary = data.find((data) => data.sallary > highSallary);

console.log(highestSallary);

const lowerSallary = data.findIndex(
  (data) => data.sallary > 0 && data.sallary < 2000
);

console.log(lowerSallary);

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));

data.map((data) => (data.test = true));

console.log(data);

const drivers = data.filter((data) => data.driverLicense);

const totalSallaries = data.reduce((total, data) => (total += data.sallary), 0);

console.log(drivers);

console.log(totalSallaries);

const showUsers = (data) => {
  data.forEach((user) => {
    console.log(user);
  });
};

showUsers(data);

let someoneDriverLicense = data.some((user) => user.driverLicense);

console.log(someoneDriverLicense);

const everyUserHasDriverLicense = data.every((user) => user.driverLicense);

const everyUserHasGoodSallary = data.every((user) => {
  return user.sallary >= 2500;
});

console.log(everyUserHasDriverLicense);

console.log(everyUserHasGoodSallary);
