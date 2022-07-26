void main() {
  User userOne = User('Luigi', 25);
  print(userOne.username);

  User userTwo = User('Mario', 30);
  print(userTwo.username);
  SuperUser userThree = SuperUser('Luigi', 25);
  userThree.publish();
}

class User {
  String? username;
  int? age;

  User(String username, int age) {
    this.username = username;
    this.age = age;
  }
}

class SuperUser extends User {
  SuperUser(String username, int age) : super(username, age);
  void publish() {
    print('publishing');
  }
  // String? superpower;
  // SuperUser(String username, int age, String superpower) : super(username, age) {
  //   this.superpower = superpower;
  // }
}
