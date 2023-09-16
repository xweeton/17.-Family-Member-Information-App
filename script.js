class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function addAge(familyMember) {
  familyMember.age += 1;
  reloadFamilyMembers();
}

function changeName(familyMember) {
  familyMember.name = prompt('What is the new name?');
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = '';

  for (const familyMember of familyMembers) {
    const row = document.createElement('tr');
    const addAgeButton = document.createElement('button');
    const changeNameButton = document.createElement('button');

    addAgeButton.innerHTML = 'Add Age';
    changeNameButton.innerHTML = 'Change Name';

    addAgeButton.className = 'customButton';
    changeNameButton.className = 'customButton';

    addAgeButton.onclick = () => addAge(familyMember);
    changeNameButton.onclick = () => changeName(familyMember);

    const actionsCell = document.createElement('td');
    actionsCell.appendChild(addAgeButton);
    actionsCell.appendChild(changeNameButton);

    row.innerHTML = `
    <td>${familyMember.name}</td>
    <td>${familyMember.age}</td>
    <td>${familyMember.gender}</td
    `;

    row.appendChild(actionsCell);

    familyList.appendChild(row);
  }
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    submitFamilyMember();
  }
}