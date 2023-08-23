import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  public alertButtons = ['Aceptar'];
  numero : number;
  numero2 : number = 2;

  constructor(private alertContorller:AlertController) { 
    this.numero = 0;
  }
   


  ngOnInit() {
  }
  //typeScrpit
  async alerta(){
    const alert = await this.alertContorller.create({
      header : 'Alerta usando AlertController',
      subHeader : 'Subtitulo',
      message : "Mensaje",
      buttons : ['Ok'],
    });
//visualizar alerta
await alert.present();
}

}
