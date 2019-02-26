let x = 1;
{
  let y = 2;
  console.log(y);
}

{
  let y = 5;
  console.log(y);
}
console.log(y);
console.log(x);

// Test Clones

const z = 3;
console.log(z);
console.log(x);

const name = "yagnesh";
const surname = "modh";

// const fullName = name + ' \n\t' + surname;

const fullName = `Hello, ${name} ${surname}`;

console.log(fullName);

const a = 1;
const b = 2;

const x = {
  a,
  b,
  c: 3,
  d() {
    return "hello";
  }
};

console.log(x.d());

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("Making Sound");
  }
}

// let a = new Animal('Dog');

class Cat extends Animal {
  constructor() {
    super();
  }

  makeSound() {
    super.makeSound();
    // console.log('Meow!');
  }
}

let c = new Cat();
console.log(c.type);
console.log(c.makeSound());

const obj = {
  a: 1,
  b: 2,
  c: 3
};

// obj.a = 2;

console.log(obj);

const obj1 = Object.assign({}, obj, { a: 2 });

console.log(obj);
console.log(obj1);

const a = [1, 2, 3, 4, 5, 6];

const b = [];

for (let index = 0; index < a.length; index++) {
  if (a[index] != 2) b.push(a[index] * 2);
}

const c = a.map(function(item) {
  if (item != 2) {
    return item * 2;
  }
  return item;
});

console.log(a);
console.log(c);

console.log(b);

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  makeSound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);
  }
}

let a = new Animal();

console.log(a.makeSound());

const a = [1, 2, 3, 4, 5, 6];

const b = a.map(x => x * 2);

console.log(b);

const a = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// for (let index = 0; index < a.length; index++) {
//     sum += a[index];
// }

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
const sum = a.reduce((previous, current) => {
  return previous + current;
}, 0);

console.log(sum);

// const a = null;
// const b = 5;

// const c = a || b;

// const d = a && b;

// console.log(c);

// console.log(d);

const a = {
  a: 1
};

console.log(a["a"]);

/*
{
  male: [
      {
      name: 'yagnesh',
      gender: 'male',
  },
  {
      name: 'ishan',
      gender: 'male'
  }
  ],
  female: [
      {
      name: 'namrata',
      gender: 'female'
  },
  {
      name: 'shukan',
      gender: 'female'
  }, 
  ]
}

*/

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "namrata",
    gender: "female"
  },
  {
    name: "shukan",
    gender: "female"
  },
  {
    name: "ishan",
    gender: "male"
  }
];

/*
  {} ->  { name: 'yagnesh', gender: 'male'} = { male: [{ name: 'yagnesh', gender: 'male'}]}
  { male: [{ name: 'yagnesh', gender: 'male'}]} -> { name: 'namrata', gender: 'female'} = { male: [{ name: 'yagnesh', gender: 'male'}]}
*/

const groupBy = (data, groupByValue) =>
  data.reduce((previous, current) => {
    (previous[current[groupByValue]] =
      previous[current[groupByValue]] || []).push(current);
    return previous;
  }, {});

console.log(groupBy(users, "gender"));

const a = [1, 2, 3, 5];

const data = a.findIndex(x => x % 2 === 0);

console.log(data);

const a = {
  a: 1,
  b: 2,
  c: 3
};

for (const key in a) {
  console.log(key);
  if (a.hasOwnProperty(key)) {
    const element = a[key];
    console.log(element);
  }
}

const a = {
  a: 1,
  b: 2,
  c: 3
};

for (const key in a) {
  console.log(key);
  if (a.hasOwnProperty(key)) {
    const element = a[key];
    console.log(element);
  }
}

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "namrata",
    gender: "female"
  },
  {
    name: "shukan",
    gender: "female"
  },
  {
    name: "ishan",
    gender: "male"
  }
];

for (const iterator of users) {
  console.log(iterator);
}

const a = {
  a: 1,
  b: 2,
  c: 3
};

for (const [key, value] of Object.entries(a)) {
  console.log(key);
  console.log(value);
}

function* add(a, b) {
  yield a + b;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  yield 3;
  return 5;
}

const obj = add(1, 3);

for (const iterator of obj) {
  console.log(iterator);
}

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

setTimeout(() => {
  console.log(4);
}, 0);

console.log(1);
console.log(2);
console.log(3);

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err");
  }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.race([prom1, prom2])
  .then(x => console.log(`then ${x}`))
  .catch(err => console.log(`catch ${err}`));



  const getData = 2;
  const getData1 = 2;
  const getData2 = 2;
  const getData3 = 2;
  const getData4 = 2;
  const getData5 = 2;
  const getData6 = 2;

  export getData;
  export getData1;
  export getData2;
  export getData3;
  export getData4;
  export getData5;

  export default getData5

  global.a = 10

  console.log(a);