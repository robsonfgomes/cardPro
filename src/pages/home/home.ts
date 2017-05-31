import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { Directive } from '@angular/core';

declare var game: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public game;   
  public initCards = true;  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.game = game;        
    this.game.time = '2:00';
    this.game.hurry = false;

    setTimeout(() => {
      this.timeOut(2, 0);
      this.initCards = false;
    }, 5000);

  }

  /*
  * Function
  */
  ngOnInit(){
      
   }

  /*
  * Implementar modal function
  */
  

  /*
  * Function
  */
  showMessage(msg): String {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.game.message = "";
    return '';
  }

  /*
  * Function
  */
  timeOut(minutes, seconds): void {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if(msLeft < 30000) {
          game.hurry = true;          
        }          
        if ( msLeft < 1000 ) {
            //element.innerHTML = "countdown's over!";
            game.timeOut = true;
            game.time = '00:00';
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            //element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            game.time = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );                               
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    //element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
  }

}

