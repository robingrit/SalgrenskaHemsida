var persons = [];
const div3 = document.querySelectorAll("div.FlexDiv");
const tre = div3[2];

var person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  Journal: "John was found in a ditch",
  room: "101",
  symptoms: "amnesia",
  medecine: "none",
  Book: "Checkup 07:00",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 32,
  Journal: "Jane came in to the hospital disorted",
  room: "110 ",
  symptoms: "disorted",
  medecine: "none",
  Book: "Checkup 10:30",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person3 = {
  firstName: "Lucas",
  lastName: "Eklund",
  age: 25,
  Journal: "Can´t stand on left leg",
  room: "107 ",
  symptoms: "none",
  medecine: "none",
  Book: "X-ray 09:00",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person4 = {
  firstName: "Gustav",
  lastName: "Larson",
  age: 22,
  Journal: "Has bruises all over the body",
  room: "104 ",
  symptoms: "swelling",
  medecine: "morfin",
  Book: "Checkup 11:00",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person5 = {
  firstName: "Joel",
  lastName: "Gustavson",
  age: 22,
  Journal: "Started having pain in the back 2 month ago",
  room: "105 ",
  symptoms: "Back pain",
  medecine: "None",
  Book: "Checkup 12:30",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person6 = {
  firstName: "Mats",
  lastName: "Svenson",
  age: 22,
  Journal: "Car accidant",
  room: "112 ",
  symptoms: "Back pain",
  medecine: "morfin",
  Book: "surgery 12:30",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};
const person7 = {
  firstName: "Emma",
  lastName: "Mattson",
  age: 22,
  Journal: "Has been having fever for a week",
  room: "114 ",
  symptoms: "fever",
  medecine: "Alvedon",
  Book: "surgery 15:30",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      " <br>" +
      "Age: " +
      this.age +
      " <br>" +
      "Journal: " +
      this.Journal +
      "<br>" +
      "Room: " +
      this.room +
      " <br>" +
      "Symptons: " +
      this.symptoms +
      " <br>" +
      "Medecine: " +
      this.medecine +
      " <br>" +
      "Booked For: " +
      this.Book
    );
  },
};

persons.push(person1);

persons.push(person2);
persons.push(person3);
persons.push(person4);
persons.push(person5);
persons.push(person6);
persons.push(person7);

const seconddiv = document.querySelectorAll("div.FlexDiv");
const två = seconddiv[1];

for (let index = 100; index < 116; index++) {
  const p = document.createElement("p");
  if (
    index == 101 ||
    index == 104 ||
    index == 105 ||
    index == 107 ||
    index == 110 ||
    index == 112 ||
    index == 114
  ) {
    p.style.background = "red";
  } else {
    p.style.background = "Green";
  }
  p.innerHTML = "Room: " + index;
  p.style.textAlign = "center";
  p.style.margin = "0.2em";
  p.style.fontSize = "large";

  två.appendChild(p);
}

function FullNameList() {
  let ptext = "";

  for (let i = 0; i < persons.length; i++) {
    console.log(i);

    let name = persons[i].fullName();
    console.log(name);
    ptext += name + "<br><br>";
  }

  p1 = document.getElementById("p1").innerHTML = ptext;
}

FullNameList();
AddJournal();

function HideDiv() {
  const div = document.getElementById("Infodiv");

  div.style.display = "none";
}
const element = document.getElementById("myBtn");
element.addEventListener("click", getValue);

const input = document.querySelector("input");
const p = document.getElementById("DisplayInfo");

let txtt = " ";
function getValue() {
  for (let i = 0; i < persons.length; i++) {
    var name = persons[i];
    if (name.firstName == input.value) {
      console.log("works");
      txtt = " ";
      txtt += name.fullInfo();
      p.innerHTML = txtt;
      tre.style.display = "flex";

      tre.appendChild(p);
      addbtn.remove();
      inputField.remove();

      createTextField(name);
    }
  }
}
function AddJournal(name, string) {
  for (let i = 0; i < persons.length; i++) {
    if (name == persons[i]) {
      Object.assign(persons[i], { Journal: string });
    }
  }
}
const h2 = document.createElement("h2");
const addbtn = document.createElement("button");
const inputField = document.createElement("input");
function createTextField(name) {
  addbtn.innerHTML = "Add";

  inputField.type = "text";
  inputField.value = "";
  h2.style.margin = "0.5em";
  h2.style.textAlign = "center";
  h2.innerHTML = "Write in the journal";
  tre.appendChild(h2);
  tre.appendChild(inputField);
  tre.appendChild(addbtn);
  tre.style.display = "block";
  addbtn.addEventListener("click", removes);
  function removes() {
    HideDiv();
    txtt = " ";
    if (inputField.value != "") {
      AddJournal(name, inputField.value);
      txtt += name.fullInfo();
      p.innerHTML = txtt;
      tre.appendChild(p);
    }

    addbtn.remove();
    inputField.remove();
  }
}
HideDiv();
