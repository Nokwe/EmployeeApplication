import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import {objemployee} from '../../app/objEmployee';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  Id;
  Name;
  Surname;
  Role;
  arrEmp=[];

  
  methordAdd(){

  let instance = new objemployee(this.Id,this.Name,this.Surname,this.Role);
 this. arrEmp.push(instance) ;

 console.log(this.arrEmp);
  

 

  
  
 
  }
  methordDelete(a,){
  this.arrEmp.splice(a,1);
  
  }
  

  MethodEdit(i) {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Id',
          placeholder: 'Id'
        },
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Surname',
          placeholder: 'Surname'
        },
        
        {
          name: 'Role',
          placeholder: 'Role'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let instance = new objemployee (data.Id,data.Name,data.Surname,data.Role);

            this.arrEmp.splice(i,1,instance);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
    

    }
  
  




