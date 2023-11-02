window.addEventListener("load", (e) => {
  let form = document.getElementById("form");
  let table = document.getElementById("table")
  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");
  let cityInput = document.getElementById("city");
  let rollNoInput = document.getElementById("roll-no");

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      taskA = nameInput.value;
      taskB = ageInput.value;
      taskC = cityInput.value;
      taskD = rollNoInput.value;
      if (!taskA || !taskB || !taskC || !taskD) {
          alert('Please fill all the fields');
      } else {
          let rowContainer = document.createElement("tr");
          rowContainer.classList.add("row-container");
          let sn = document.createElement("td")
          sn.classList.add("SN")
          let snArray = document.getElementsByClassName("SN")
          sn.textContent = snArray.length + 1;
          let name = document.createElement("td");
          name.textContent = taskA;
          let number = document.createElement("td");
          number.textContent = taskB;
          let city = document.createElement("td");
          city.textContent = taskC;
          let rollNo = document.createElement("td");
          rollNo.textContent = taskD;
          let attendance = document.createElement("td");
          let presentBtn = document.createElement("button")
          presentBtn.classList.add("presentBtn")
          presentBtn.innerText = "P"
          let absentBtn = document.createElement("button");
          absentBtn.classList.add("absentBtn");
          absentBtn.innerText = "A";
          attendance.append(presentBtn, absentBtn)
          table.append(rowContainer)
          rowContainer.append(sn, name, number, city, rollNo, attendance)
          presentBtn.addEventListener("click", (e) => {
              absentBtn.remove();
              presentBtn.textContent = "Present";

          })

          absentBtn.addEventListener("click", (e) => {
              presentBtn.remove();
              absentBtn.textContent = "Absent";
          })

          nameInput.value = "";
          ageInput.value = "";
          cityInput.value = "";
          rollNoInput.value = "";
      }
  })
})
