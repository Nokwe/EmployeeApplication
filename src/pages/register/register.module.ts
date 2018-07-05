import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {
  firstName;
  Surname;
 
  Username;
  Password;

  constructor(firstName:string,Surname:string,Username:string,Password:string){
    this.firstName=firstName;
    this.Surname=Surname;
   
    this.Username=Username;
    this.Password=Password;
  }



  
}
