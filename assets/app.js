const people = [
  {name: 'karim', age: 20, postion: 'developer', id: 1, salary: 200},
  {name: 'rahim', age: 20, postion: 'designer', id: 2, salary: 300},
  {name: 'sherrin', age: 20, postion: 'the boss', id: 3, salary: 240},
  {name: 'afraz', age: 20, postion: 'developer', id: 4, salary: 260},
  {name: 'farwa', age: 20, postion: 'manager', id: 5, salary: 400}
]

const total = people.reduce(function(acc, currSalary){
  console.log(`Total ${acc}`);
  console.log(`Current mony: $${currSalary.salary}`);
  return acc += currSalary.salary;
},0)

console.log(total);