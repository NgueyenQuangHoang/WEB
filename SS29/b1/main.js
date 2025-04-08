class Contact {
    constructor(id, name, email, phone) {
        this.id = parseInt(id);
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class ContactList {
  constructor() {
    this.contacts = [];
  }

  addContact() {
    const id = parseInt(prompt("Enter Id:"));
    if (isNaN(id) || this.contacts.some((ctt) => ctt.id === id)) {
      alert("Invalid ID or ID already exists");
      return;
    }

    const name = prompt("Enter contact's name:");
    if (!name || name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }

    const email = prompt("Enter contact's email:");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    const phone = prompt("Enter contact's phone:");
    const newContact = new Contact(id, name, email, phone);
    this.contacts.push(newContact);
    alert("Contact added successfully");
  }

  showContactList() {
    if (this.contacts.length === 0) {
      alert("No contacts exist. Add a new one?");
      return;
    }

    let contactList = "Contact List:\n";
    this.contacts.forEach((contact) => {
      contactList += `ID: ${contact.id}\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\n\n`;
    });
    alert(contactList);
  }

  searchContact() {
    const input = prompt("Enter Contact's Phone number");
    if (input.length === 0) {
      alert("Please enter a number:");
      return;
    }

    let foundNumber = this.contacts.filter((contact) =>
      contact.phone.includes(input)
    );
    if (foundNumber.length === 0) {
      alert("Phone number does not exist!");
    } else {
      let foundNumberList = "Result:\n";
      foundNumber.forEach((contact) => {
        foundNumberList += `ID: ${contact.id}\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\n\n`;
      });
      alert(foundNumberList);
    }
  }

  editContact() {
    const input = parseInt(prompt("Enter Contact's ID:"));
    if (isNaN(input)) {
        alert("Invalid ID!");
        return;
    }
    const editContact = this.contacts.find((contact) => contact.id === input);
    if (!editContact) {
        alert("Contact does not exist!");
        return;
    }

    const newName = prompt(`Enter new name (current:${editContact.name})`);
    const newEmail= prompt(`Enter new email(current:${editContact.email})`);
    const newPhone = prompt(`Enter new phone(current:${editContact.email})`);

    if(newName && newName.trim() !==""){
        editContact.name = newName.trim();
    }
    if(newEmail && newEmail.trim() !==""){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    } else{
        alert("Invalid email format! not updated")
    }
    if(newPhone && newPhone.trim() !== ""){
        editContact.phone = newPhone.trim();
    }
    alert("Contact updated successfully!");
  }

  deleteContact() {}
}

function menu() {
    return parseInt(
        prompt(
            "Menu:\n" +
            "1. Add contact\n" +
            "2. Show contact list\n" +
            "3. Search contact\n" +
            "4. Edit contact\n" +
            "5. Delete contact\n" +
            "6. Exit\n" +
            "Enter your choice:"
        )
    );
}

let contactList = new ContactList();
let choice;

do {
    choice = menu();
    switch (choice) {
        case 1:
            contactList.addContact();
            break;
        case 2:
            contactList.showContactList();
            break;
        case 3:
            contactList.searchContact();
            break;
        case 4:
            contactList.editContact();
            break;
        case 5:
            contactList.deleteContact();
            break;
        case 6:
            alert("Exiting...");
            break;
        default:
            alert("Invalid choice. Please try again.");
            break;
    }
} while (choice !== 6);