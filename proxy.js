/**
 * Gọi một chứ năng thông qua một lớp trung gian
 */

class Boss {
  receiveRequest(name, request) {
    console.log(`Boss said: OK with ${name} (${request}) !!!`);
  }
}

class Hr {
  constructor() {
    this.boss = new Boss();
  }

  receiveRequest(name, request) {
    this.boss.receiveRequest(name, request);
  }
}

class Staff {
  constructor(offer, name) {
    this.offer = offer;
    this.name = name;
  }

  addRequest(target) {
    target.receiveRequest(this.name, this.offer);
  }
}

const hr = new Hr();
const staff = new Staff("Tôi cần tăng lương 50tr, không tôi nghỉ", "liem");

staff.addRequest(hr);
