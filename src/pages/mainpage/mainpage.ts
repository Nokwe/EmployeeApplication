import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{RegisterPage} from '../../pages/register/register';
import {HomePage} from '../../pages/home/home';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  Register(){

  
    this.navCtrl.push(RegisterPage);
  }


  Signin(){
    this.navCtrl.push(SigninPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  }

}
