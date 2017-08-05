import {
  Component,
  OnInit
} from '@angular/core';
import {UserService} from "../models/user.service";
import {UserModel} from "../models/user.model"
import {DataSource} from "@angular/cdk";
import {Observable} from 'rxjs/Observable';
import {ContactModel} from "../models/contact.model";
import {PhonePipe} from "../pipes/phonepipe.component";
import {AddContactDialog} from "../addcontactdialog/addcontactdialog.component";
import {MdDialog} from "@angular/material"

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    PhonePipe
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public currentUser: UserModel;
  public contactsDataSource: DataSource<any>;
  displayedColumns = ['contactName', 'contactPhoneNumber'];

  constructor(
    public userService: UserService,
    public dialog: MdDialog

  ) {}

  openDialog() {
    this.dialog.open(AddContactDialog);
  }

  public ngOnInit() {
    let userId = 1;
    this.currentUser = this.userService.getUser(userId);
    this.contactsDataSource = this.userService.getContactsAsDataSource(this.currentUser);
  }
}




