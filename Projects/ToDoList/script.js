let todoele = document.getElementById("taskinfo")
let tasklist1 = document.getElementById("tasklist")
document.getElementById("add").onclick = function () {
     if (todoele.value.length == 0) {
          alert("enter a task details")
     }
     else {
          tasklist1.innerHTML = tasklist1.innerHTML +
               `<div class="task">
              <span id="work">${todoele.value}</span>
              <button class="del"><i class="fa fa-trash"></i></button>
              </div>`
          let alltasks = document.querySelectorAll('.del')
          for ( i = 0; i < alltasks.length; i++) {
               alltasks[i].onclick = function () {
                    this.parentNode.remove()
               }
          }
          todoele.value=""
     }
}