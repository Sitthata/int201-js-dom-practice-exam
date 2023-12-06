class User {
  // static runningId = 1;
  color = '';
  list = [];

  // static setRunningId(loadingId) {
  //   User.runningId = loadingId;
  // }

  constructor(newUsername, newEmail, newPassword) {
    // this.id = runningId++;
    this.username = newUsername;
    this.email = newEmail;
    this.password = newPassword;
  }

  updateColor(newColor) {
    this.color = newColor;
  }

  addItemToList(item) {
    this.list.push(item);
  }

  getList() {
    return this.list;
  }

  getColor() {
    return this.color;
  }
}

export { User };
