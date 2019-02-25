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
