let tbody = document.querySelector("tbody");
let addBtn = document.querySelector(".add");
let form = document.querySelector(".form-wrapper");
let saveBtn = document.querySelector(".save");
let cancelBtn = document.querySelector(".cancel");

let mobileEle = document.querySelector("#mobile");
let priceEle = document.querySelector("#price");
let ramEle = document.querySelector("#ram");
let storageEle = document.querySelector("#storage");

let url = "http://localhost:5050/mobiles";
let mobiles = [];
let id = null;
let data = null;
let httpMethod = null;
addBtn.onclick = function () {
  httpMethod = "POST";
  clearForm();
  form.classList.add("active");
};
cancelBtn.onclick = function () {
  form.classList.remove("active");
};

saveBtn.onclick = function () {
  data.name = mobileEle.value;
  data.price = priceEle.value;
  data.ram = ramEle.value;
  data.storage = storageEle.value;
  if (httpMethod == "PUT") {
    data.id = id;
  }
  fetch(url, {
    method: httpMethod,
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    },
  }).then(() => {
    clearForm();
    form.classList.remove("active");
    getMobiles();
  });
};

function clearForm() {
  mobileEle.value = null;
  priceEle.value = null;
  ramEle.value = null;
  storageEle.value = null;
}

function getMobiles() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      mobiles = data;
      updateTable();
    });
}

getMobiles();
function updateTable() {
  let data = "";
  if (mobiles.length > 0) {
    for (i = 0; i < mobiles.length; i++) {
      data += `<tr id="${mobiles[i]["id"]}">
               <td>${mobiles[i]["name"]}</td>
               <td>${mobiles[i]["price"]}</td>
               <td>${mobiles[i]["ram"] + "GB"}</td>
               <td>${mobiles[i]["storage"] + "GB"}</td>
               <td><button class="btn btn-primary" onclick="editMobile(event)">Edit</button></td>
                    <td><button class="btn btn-danger" onclick="deleteMobile(event)">Delete</button></td>
               </tr>`;
    }
    // console.log(data)
    tbody.innerHTML = data;
  }
}
function editMobile(e) {
  // console.log(e)
  // console.log(e.target.parentElement.parentElement.id)
  form.classList.add("active");
  httpMethod = "PUT";
  id = e.target.parentElement.parentElement.id;

  let selectedMobile = mobiles.filter((m) => {
    return m["id"] == id;
  })[0];
  mobileEle.value = selectedMobile.name;
  priceEle.value = selectedMobile.price;
  ramEle.value = selectedMobile.ram;
  storageEle.value = selectedMobile.storage;
}
function deleteMobile(e) {
  id = e.target.parentElement.parentElement.id;
  fetch(url + "/" + id, { method: "DELETE" }).then(() => {
    getMobiles();
  });
}
