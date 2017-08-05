import {ContactModel} from "./contact.model"

export class UserModel {
  id: number;
  name: string;
  userName: string;
  password: string;
  contacts: ContactModel[];

  constructor(userName: string, password: string, contacts: ContactModel[]) {
    this.userName = userName;
    this.password = password;
    this.contacts = contacts;
  }
  changePassword(newPassword: string) {
    this.password = newPassword;
  }
  addContact(newContact: ContactModel) {
    this.contacts.push(newContact);
  }
  deleteContact(contactToDeleteIndex: number) {
    delete this.contacts[contactToDeleteIndex];
  }
}
