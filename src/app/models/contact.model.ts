export class ContactModel {
  name: string;
  phoneNumber: number;

  constructor(name:string, phoneNumber:number){
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  changeName(newName:string){
    this.name = newName;
  }
  changePhoneNumber(newPhoneNumber:number){
    this.phoneNumber = newPhoneNumber;
  }
}

