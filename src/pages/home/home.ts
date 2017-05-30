import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Directive } from '@angular/core';

declare var game:any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  
  game;    

  constructor(public navCtrl: NavController, public toastCtrl : ToastController) {    
    this.game = game;      
  } 

  showMessage(msg) : String {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.game.message = "";
    return '';
  }

}

