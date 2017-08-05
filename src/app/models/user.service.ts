import { Injectable } from '@angular/core';
import { UserModel} from "./user.model";
import {ContactModel} from "./contact.model";
import {Observable} from 'rxjs/Observable';

import {DataSource} from "@angular/cdk";

@Injectable()

  export class UserService{

  public getUser(id: number){
    let userToReturn = new UserModel("testUserName", "testUserPassword",
      [new ContactModel("testContact1", 713123456), new ContactModel("testContact2", 8322345678)]);
    return userToReturn;
  }

  public  addNewContact(newContact: ContactModel){
    //call api to add contact
  }

  public getContactsAsDataSource(user: UserModel)
  {
    return new UserContactsAsDataSource(user);
  }

}
export class UserContactsAsDataSource extends DataSource<any> {
  constructor(private _user: UserModel) {
    super();
  }
  connect(): Observable<ContactModel[]> {
    return Observable.of(this._user.contacts  );
  }
  disconnect() {}
}
