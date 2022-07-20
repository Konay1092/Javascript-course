/*
          Session Storage LESSON

//SessionStorage.setItem("dbname", p2); // Data push to dbname
// SessionStorage.getItem("dbname");//data get from dbname
// SessionStorage.removeItem("dbname"); //remove data from dbname

*/
var SetDatatoDb = (userObj) => {
  let userary = GetDataFromDb();
  if (userary == null) {
    userary = [];
    userary.push(userObj);
    SaveDataToDb(userary);
  } else {
    userary.push(userObj);
    SaveDataToDb(userary);
  }
};
let SaveDataToDb = (aryobj2) => {
  let SaveData = JSON.stringify(aryobj2);
  sessionStorage.setItem("localdb", SaveData);
};

var GetDataFromDb = () => {
  let str = sessionStorage.getItem("localdb");
  let aryobj1 = JSON.parse(str);
  return aryobj1;
};
var RemoveDb = () => {
  sessionStorage.removeItem("localdb");
};

var form = document.querySelector("form");
var username = document.querySelector("#username");
var userage = document.querySelector("#age");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = username.value;
  let age = userage.value;
  let user = {
    name: name,
    age: age,
  };
  SetDatatoDb(user);
});
