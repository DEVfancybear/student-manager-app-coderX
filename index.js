var readlineSync = require("readline-sync");
var fs = require("fs");
var students = [];
function loadData() {
  var dataContent = fs.readFileSync("./data.json");
  students = JSON.parse(dataContent);
}
function showMenu() {
  console.log("1. Show All Students");
  console.log("2. Creat Students");
  console.log("3. Save and Exit");
  var question = readlineSync.question("> ");
  switch (question) {
    case "1":
      showAllStudents();
      showMenu();
      break;
    case "2":
      // lấy thông tin người dùng
      showCreatStudents();
      showMenu();
      break;
    case "3":
      saveAndExit();
      break;
    default:
      console.log("Wrong questions");
      showMenu();
      break;
  }
}
function showAllStudents() {
  for (var student of students) {
    console.log(student.name, student.age);
  }
}
function showCreatStudents() {
  var name = readlineSync.question("Name: ");
  var age = readlineSync.question("Age: ");
  var student = {
    name: name,
    age: parseInt(age)
  };
  students.push(student);
}
function saveAndExit() {
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, { encoding: "utf8" });
}
function main() {
  loadData();
  // console.log(students);
  //hiển thị ra menu
  showMenu();
}
main();
