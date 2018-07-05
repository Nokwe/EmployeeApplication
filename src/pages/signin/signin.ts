import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import arrSignUp from '../../app/arrayEmp';
import arraysignup from '../../app/signuparr'



/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage{

signIn = arraysignup;
username ;  
password; 



inputname(event){
this.username=event.target.value;
}

inputpass(event){
  this.password=event.target.value;
  }
//Login(){
     // this.navCtrl.push(HomePage);

 myLoginMethod(){
  alert(this.signIn);
  console.log(this.signIn);
  for(let i=0; i < this.signIn.length;i++){
 
  if(this.signIn[i].username ==this.username && this.signIn[i].password == this.password){


    
    //const message = this.alertCtrl.create({ title : 'sucessful',message : 'done',buttons:['ok']});
    //message.present();
    //this.navCtrl.push(HomePage);
    //console.log(this.signIn)

    this.navCtrl.push(HomePage);

  }

  else{
    const error = this.alertCtrl.create({ title : 'unsucessful',message : 'enter correct details',buttons:['ok'] })
    error.present();
  }
}
}
/* 
  ionViewDidLoad() {
  console.log('ionViewDidLoad SigninPage');
  }
   
 */
  
constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
}
  }