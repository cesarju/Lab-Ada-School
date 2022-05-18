/* const contactList = [
  "DIEGO ALEJANDRO FORERO PEÑA",
  "CARLOS ANDRÉS POLO CASTELLANOS",
  "CAROL RUCHINA GOMEZ GIANINE",
  "DIANA CAROLINA LOPEZ RODRIGUEZ",
  "GABRIEL MAURICIO NIETO BUSTOS ",
]; */

class contact {
  constructor(id, nombres, apellidos, telefono, ciudad, direccion) {
    (this.id = id),
      (this.nombres = nombres),
      (this.apellidos = apellidos),
      (this.telefono = telefono),
      (this.ubicacion = [(this.ciudad = ciudad), (this.direccion = direccion)]);
  }
}

const contactList = [];
// agragar un contacto a la lista
const addContac = (id, nombres, apellidos, telefono, ciudad, direccion) => {
  const newContact = new contact(
    id,
    nombres,
    apellidos,
    telefono,
    ciudad,
    direccion
  );
  contactList.push(newContact);
};
// borrar un contacto de la lista
const deleteContac = (arr, nameContact) => {
  const lista = [];
  arr.find((element) => {
    if (element.nombres !== nameContact) {
      lista.push(element);
    }
  });
  return lista;
};
//update contact
/* arr = lista de contactos
nombreContact = busqueda del contacto a modificar
item = campo a modificar
newItem = nuevo campo */
const updateContact = (arr, nombreContact, item, newItem) => {
  arr.find((element) => {
    if (element.nombres === nombreContact) {
      element[item] = newItem;
    }
  });
};

//print contacs list
const printContacts = (list) => {
  console.log(list);
};
//Agregar contactos a la lista
addContac("1", "Cesar", "Ticona", 71207497, "La Paz", "Alto tejar");
addContac("2", "Adrian", "Flores", 69207497, "Cochabamba", "El Alto");
addContac("3", "Luca", "Torres", 79017497, "La Paz", "Miraflores");
addContac("4", "Marcelo", "Mamani", 77347497, "La Paz", "Obrajes");
// imprimir la lista mas borrar un contacto de la lista
printContacts(deleteContac(contactList, "Luca"));
//actualizar un contacto
updateContact(contactList, "Cesar", "nombres", "Julio");
//imprime lista de contactos
console.log(contactList);
