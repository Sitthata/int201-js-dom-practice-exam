let userList = [];

function getUserlist() {
  return userList;
}

function addUserToList(user) {
  userList.push(user);
}

export { userList, addUserToList, getUserlist };
