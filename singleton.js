/**
 * Creational pattern
 * Đảm bảo chỉ có một instance database được khởi tạo
 */

class Database {
  constructor() {
    console.log("Database constructor called");
  }

  connect() {
    console.log("Connected database.");
  }
}

class InitDatabase {
  constructor() {
    if (InitDatabase.instance) return InitDatabase.instance;
    InitDatabase.instance = this;
    this.database = new Database();
    Object.freeze(this);
  }

  getDatabase() {
    return this.database;
  }

  connect() {
    this.database.connect();
  }
}

const init1 = new InitDatabase();
const init2 = new InitDatabase();

console.log(init1 === init2);

init1.connect();
init2.connect();
