const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      const contacts = JSON.parse(string);
      console.table(contacts);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      const contacts = JSON.parse(string);
      console.log(contacts[contactId]);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      const contacts = JSON.parse(string);
      const filteredContacts = contacts.filter((item) => item.id !== contactId);
      console.log("Kontakt usunięty!");
      console.table(filteredContacts);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function addContact(name, email, phone) {
  const contact = {
    name,
    email,
    phone,
  };
  fs.readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      const contacts = JSON.parse(string);
      contacts.push(contact);
      console.log(`Udało się zapisać kontakt w pliku`);
      console.table(contacts);
    })
    .catch((err) => {
      console.log(`Nie udało się zapisać kontaktu w pliku`);
    });

  //   try {
  //     await fs.appendFile(contactsPath, `${JSON.stringify(contact)}\n`);
  //     console.log(`Udało się zapisać kontakt w pliku`);
  //   } catch (err) {
  //     console.log(`Nie udało się zapisać kontaktu w pliku`);
  //   }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
