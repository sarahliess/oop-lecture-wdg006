const myObj = {
  name: "Lucie",
  age: 6,
  hobbies: ["sing", "dance", "read"],
  talk() {
    return "wuff";
  },
};

// console.log(myObj);

////////////////////////////////////////////////////////////

class Animal {
  //   #name;
  constructor(value1, value2) {
    this._name = value1;
    this._type = value2;
  }

  getName() {
    return this._name;
  }

  getType() {
    return this._type;
  }

  getThis() {
    return this;
  }

  setName(value) {
    // this._name = value;
    this._name = "This is my new name";
  }
}

const myDog = new Animal("Lucie", "Dog");
const myCat = new Animal("Mimi", "Cat");
myCat.setName();

// console.log(myDog);
// console.log(myCat._name);
// console.log(myCat);

////////////////////////////////////////////////

class Dog extends Animal {
  constructor(value1, value2, value3) {
    super(value1, value2);
    this._age = value3;
  }
  bark(value) {
    return `Wuff, my name is ${this._name} and I like ${value}`;
  }
}

const mySecondDog = new Dog("Jerry", "Dog", 2);
const myThirdDog = new Dog("Tim", "Dog", 5);
// console.log(mySecondDog.bark("meat"));
// console.log(myThirdDog.bark("carrots"));

////////////////////////////////////////////

class Park {
  constructor(value) {
    this._name = value;
    this._listOfAnimals = [];
  }

  addAnimals(value1) {
    this._listOfAnimals.push(value1);
  }

  showList() {
    return this._listOfAnimals;
  }
}

const maschPark = new Park("Maschpark");

maschPark.addAnimals(myDog);
maschPark.addAnimals(myCat);

console.log(maschPark);
console.log(maschPark.showList());
