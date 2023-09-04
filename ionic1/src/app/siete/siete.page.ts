
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
//string, number, boolean, any
nombre = 'Juan';
apellidoPaterno : string;
apellidoMaterno : string = "Fuentes"; 
num1 = '';
num2 = '';
total : any = '';
  constructor(private toastController: ToastController) { 
    this.apellidoPaterno = "Diaz";


  }
  


  ngOnInit() {


  }

  async sumar()
  {
    this.total = this.num1 + this.num2;
    const toast = await this.toastController.create({
      message: 'El resultado es '+ this.total ,
      duration : 3000,
      position : 'bottom',
    });
    await toast.present();
  }  
  

}
