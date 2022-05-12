const contactList = [
  "DIEGO ALEJANDRO FORERO PEÑA",
  "CARLOS ANDRÉS POLO CASTELLANOS",
  "CAROL RUCHINA GOMEZ GIANINE",
  "DIANA CAROLINA LOPEZ RODRIGUEZ",
  "GABRIEL MAURICIO NIETO BUSTOS ",
];
// agragar un contacto a la lista
const addContac = (nameContact) => {
  contactList.push(nameContact);
};
// borrar un contacto de la lista
const deleteContac = (arr, nameContact) => {
  const position = arr.indexOf(nameContact);
  if (position !== -1) {
    arr.splice(position, 1);
  }
};

//print contacs list
const printContacts = (list) => {
  console.log(list);
};

console.log(contactList[1]);
addContac("CESAR TICONA");
console.log(contactList);
deleteContac(contactList, "CARLOS ANDRÉS POLO CASTELLANOS");
printContacts(contactList);

/* function removeItemFromArr(arr, item) {
  var i = arr.indexOf(item);

  if (i !== -1) {
    arr.splice(i, 1);
  }
} */
