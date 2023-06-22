function deleteField(event) {
  const newFields = event.parentNode.parentNode.querySelectorAll(".field");
  if (newFields.length <= 1) {
    event.parentNode.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    return;
  }
  event.parentNode.remove();
}

function addField(event) {
  console.log("addField");
  const sectionForm = event.parentNode.parentNode;
  const field = sectionForm.querySelectorAll(".field");
  const cloneField = field[field.length - 1].cloneNode(true);
  let continueField = true;

  field[field.length - 1]
    .querySelectorAll("input[type='text']")
    .forEach((input) => {
      if (input.value == "") {
        continueField = false;
      }
    });
  cloneField.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  if (continueField) {
    sectionForm.appendChild(cloneField);
  }
}

function numbers() {
  document
    .querySelectorAll(".numbers")
    .forEach(
      (number) =>
        (number.onkeypress = (event) =>
          event.charCode >= 48 && event.charCode <= 57)
    );
}

function formateDate(date) {
  const dateModule = new Date();

  let [dayBefore, monthBefore, yearBefore] = ["", "", ""];
  $(date).on("keyup", null, (event) => {
    if (event.keyCode != 8 && event.keyCode != 46) {
      let elementValue = event.target.value;

      let mydate = elementValue;

      mydate = mydate.replace(/\//g, "");
      let sizeDate = mydate.length;

      let [day, month, year] = ["", "", ""];
      let change = false;
      if (parseInt(mydate.substr(0, 1)) > 3) {
        day = `0${mydate.substr(0, 1)}/`;
      } else if (parseInt(mydate.substr(0, 2)) > 31) {
        day = `31/`;
      } else if (mydate.substr(0, 2).length == 2) {
        day = `${mydate.substr(0, 2)}/`;
      }

      if (day != dayBefore) {
        event.target.value = `${day}${monthBefore}${yearBefore}`;
        dayBefore = day;
      }
      mydate = event.target.value;
      mydate = mydate.replace(/\//g, "");

      if (parseInt(mydate.substr(2, 1)) > 1) {
        month = `0${mydate.substr(2, 1)}/`;
      } else if (parseInt(mydate.substr(2, 2)) > 12) {
        month = `12/`;
      } else if (mydate.substr(2, 2).length == 2) {
        month = `${mydate.substr(2, 2)}/`;
      }

      if (month != monthBefore) {
        event.target.value = `${dayBefore}${month}${yearBefore}`;
        monthBefore = month;
      }

      mydate = event.target.value;
      mydate = mydate.replace(/\//g, "");

      year = `${mydate.substring(4, 8)}`;
      if (year != yearBefore) {
        event.target.value = `${dayBefore}${monthBefore}${year}`;
        yearBefore = year;
      }
    }
  });

  $(date).on("focusout", null, (element) => {
    let [dayBefore, monthBefore, yearBefore] = ["", "", ""];
    let mydate = element.target.value;
    let sizeDate = mydate.length;

    if (sizeDate == 8) {
      let arrayDate = mydate.split("/");
      let year = arrayDate.splice(-1);
      arrayDate[2] = "20" + year;
      mydate = arrayDate.join("/");
      element.target.value = mydate;
    }

    const [day, month, year] = mydate.split("/");
    const [dayToday, monthToday, yearToday] = [
      dateModule.getDate(),
      dateModule.getMonth() + 1,
      dateModule.getFullYear(),
    ];

    function error(element, msg) {
      alert(msg);
      element.target.style.backgroundColor = "rgba(255,0,0,0.76)";
    }
    if (year == yearToday) {
      if (month == monthToday) {
        if (day > dayToday) {
          error(element, "Data inválida!");
        } else {
          element.target.style.backgroundColor = "";
        }
      } else if (month > monthToday) {
        error(element, "Data inválida!");
      } else {
        element.target.style.backgroundColor = "";
      }
    } else if (year < yearToday) {
      element.target.style.backgroundColor = "";
    } else {
      error(element, "Data inválida!");
    }
  });
}

function runScriptsForm() {
  numbers();
  $(".date").each((i, date) => formateDate(date));

  $(".bt-remove-field").each((i, rm) => {
    $(rm).on("click", null, () => {
      deleteField(rm);
    });
  });

  $(".bt-add-field").each((i, bt) => {
    $(bt).on("click", null, () => {
      addField(bt);
      $(".bt-remove-field").each((i, rm) => {
        $(rm).on("click", null, () => {
          deleteField(rm);
        });
      });
    });
  });
}
