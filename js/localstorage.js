/*
          localStorage LESSON

//localStorage.setItem("dbname", p2); // Data push to dbname
// localStorage.getItem("dbname");//data get from dbname
// localStorage.removeItem("dbname"); //remove data from dbname

*/

var addDatatoDb = (obj) => {
  let data = JSON.stringify(obj);
  localStorage.setItem("localdb", data);
};
var getDatafromDb = () => {
  let str = localStorage.getItem("localdb");
  let obj = JSON.parse(str);
  return obj;
};
var removeDb = () => {
  localStorage.removeItem("localdb");
};

var form = document.querySelector("form");
var username = document.querySelector("#username");
var userage = document.querySelector("#age");
var btn = document.querySelector("#delete");

form.addEventListener("submit", function (e) {
  let name = username.value;
  let age = userage.value;
  //   console.log(`username:${name}
  //   userage:${age}`);
  let user = {
    name: name,
    age: age,
  };
  addDatatoDb(user);

  e.preventDefault();
});
btn.onclick = () => {
  removeDb();
};
