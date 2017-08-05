import {Component} from '@angular/core';
import {MdInputModule} from '@angular/material';
import {ContactModel} from "../models/contact.model";
import {UserService} from "../models/user.service"
@Component({
  selector: 'addcontactdialog',
  templateUrl: 'addcontactdialog.html',
})
export class AddContactDialog {
  public newContact: ContactModel;
  constructor(private userService: UserService){
    this.newContact = new ContactModel("", null);
  }

  saveContact(){
    this.userService.addNewContact(this.newContact);
  }
}
