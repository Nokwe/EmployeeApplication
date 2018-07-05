import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { signup } from '../../app/arrSignup';
import  singuparray  from '../../app/signuparr';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  signin(){
    this.navCtrl.push(SigninPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  username;
  password;

  inputusername(event){

    this.username=event.target.value;
    
    }
    inputpassword(event){
    
      this.password=event.target.value;
    
    }

  siginup(){
   
    let objsinup = new signup(this.username,this.password);

     singuparray.push(objsinup);



console.log(singuparray);
    
    alert(singuparray);
    this.navCtrl.push(SigninPage);

    alert();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
