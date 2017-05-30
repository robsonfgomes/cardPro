import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Directive } from '@angular/core';

declare var game:any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  
  game;  

  constructor(public navCtrl: NavController) {    
    this.game = game;      
  } 

}

