import data from "../data/data.json" assert { type: "json" };

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let peopleCount = document.getElementById("peopleCount");
let sortByMenu = document.getElementById("sortByMenu");
let reverseBtn = document.getElementById("reverseBtn");
let reverse = false;
let limit = 100;
let startInc = 0;

peopleCount.addEventListener("click", () => {
 limit = peopleCount.value == 'selected' ? 100 : parseInt(peopleCount.value)
 console.log(limit);
  SwitchCase(sortByMenu.value);
});

nextBtn.addEventListener("click", () => {
  startInc += limit;
  if (startInc >= data.People.length) {
    startInc = 0;
  }
  SwitchCase(sortByMenu.value);
});

prevBtn.addEventListener("click", () => {
  startInc -= limit;
  if (startInc < 0) {
    startInc = data.People.length - limit;
  }
  SwitchCase(sortByMenu.value);
});
//Sort by Height
const SortByHeight = () => {
  const sortedArr = data.People.sort((a, b) => {
    a = a.Height.substring(0, 2);
    b = b.Height.substring(0, 2);

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return reverse ? Populate(sortedArr.reverse()) : Populate(sortedArr);
};

//sort by ID
const SortByID = () => {
  const sortedArr = data.People.sort((a, b) => {
    a = a.Id;
    b = b.Id;
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return reverse ? Populate(sortedArr.reverse()) : Populate(sortedArr);
};

//sort by Age
const SortByAge = () => {
  const sortedArr = data.People.sort((a, b) => {
    a = a.Age;
    b = b.Age;
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return reverse ? Populate(sortedArr.reverse()) : Populate(sortedArr);
};

//sort by Last Name
const SortByLastName = () => {
  const sortedArr = data.People.sort((a, b) => {
    a = a.LastName;
    b = b.LastName;
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return reverse ? Populate(sortedArr.reverse()) : Populate(sortedArr);
};

//sort by First Name
const SortByFirstName = () => {
  const sortedArr = data.People.sort((a, b) => {
    a = a.FirstName;
    b = b.FirstName;

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  return reverse ? Populate(sortedArr.reverse()) : Populate(sortedArr);
};

//initial Population
const Populate = (arr) => {
  tablebody.innerHTML = " ";
  arr.slice(startInc, startInc + limit).map((People) => {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = People.FirstName;

    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = People.LastName;

    var idCell = document.createElement("td");
    idCell.textContent = People.Id;

    var heightCell = document.createElement("td");
    heightCell.textContent = People.Height;

    var ageCell = document.createElement("td");
    ageCell.textContent = People.Age;

    row.append(idCell, firstNameCell, lastNameCell, heightCell, ageCell);
    row.style.borderBottomColor = 'black'
    row.style.borderBottomWidth = '1px'
    row.style.paddingTop = '4px'
    tablebody.appendChild(row);
  });
};

Populate(data.People);

// Switch case as a fucntion to use for reverseBtn
const SwitchCase = (e) => {
  console.log(reverse)
  switch (e) {
    case "First Name":
      SortByFirstName();
      break;
    case "Last Name":
      SortByLastName();
      break;
    case "ID":
      SortByID();
      break;
    case "Height":
      SortByHeight();
      break;
    case "Age":
      SortByAge();
      break;
    default:
   SortByID()
   break;

  }
};
sortByMenu.addEventListener("click", () => {
  SwitchCase(sortByMenu.value);
});

reverseBtn.addEventListener("click", () => {
  reverse = !reverse ? true : false;
  SwitchCase(sortByMenu.value);
});
