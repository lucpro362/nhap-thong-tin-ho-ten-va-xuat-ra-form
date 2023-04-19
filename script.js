console.log('Hello!');

let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let saveBtn = document.getElementById('saveBtn');

let tbody = document.getElementById('tbody');
let nameValue = ''; //
let ageValue = ''; //'
// save
saveBtn.addEventListener('click', function () {
  console.log(nameValue, nameElement.value);
  nameValue = nameElement.value; // lay gia tri huyhq
  ageValue = ageElement.value;

  let tbodyHtml = `<tr id="row">
  <td>${nameValue}</td>
  <td>${ageValue}</td>
  <td>
    <button class="edit" id="editbtn">Edit</button>
    <button class="delete" id="deletebtn">Delete</button>
  </td>
</tr>`;
  tbody.innerHTML = tbodyHtml; // hien thi
  // delete input value
  nameElement.value = ''; // xoa gia tri
  ageElement.value = '';
  console.log(nameValue);
  // set btn delete
  let deleteBtn = document.getElementById('deletebtn');

  deleteBtn.addEventListener('click', function () {
    let row = document.getElementById('row');
    // let isDelete = confirm('Is Delete');

    // if (isDelete) {
    row.remove();
    // }
  });

  // edit
  let editBtn = document.getElementById('editbtn');

  editBtn.addEventListener('click', function () {
    nameElement.value = nameValue;
    ageElement.value = ageValue;
  });
});
