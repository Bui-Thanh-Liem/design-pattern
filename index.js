class User {
  constructor(name) {
    this.name = name;
  }

  updateState(newIphone) {
    this.notify(newIphone);
  }

  notify(newIphone) {
    console.log(`${this.name} - ${newIphone}`);
  }
}

class Apple {
  constructor() {
    this.subscribers = [];
  }

  addSub(user) {
    this.subscribers.push(user);
  }

  release(newIphone) {
    this.subscribers.forEach((sub) => sub.notify(newIphone));
  }
}

const apple = new Apple();

const liem = new User("liem");
const huy = new User("huy");

apple.addSub(liem);
apple.addSub(huy);

apple.release("Iphone 19 pro max");
