/**
 * Behavioral pattern
 * 
 */

class User {
  constructor(name) {
    this.name = name;
  }

  updateStatus(newIphone) {
    this.notify(newIphone);
  }

  notify(newIphone) {
    console.log(
      `${this.name} nhận thông báo: Apple vừa ra iPhone mới - ${newIphone}`
    );
  }
}

class Apple {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(user) {
    this.subscribers.push(user);
  }

  releaseNewIphone(newIphone) {
    console.log(`Apple vừa ra iPhone mới: ${newIphone}`);
    this.subscribers.forEach((user) => user.updateStatus(newIphone));
  }
}

//
const sub = new Apple();

//
const lee = new User("lee");
const miss = new User("miss");

sub.addSubscriber(lee);
sub.addSubscriber(miss);

sub.releaseNewIphone("Iphone 18 pro max");
