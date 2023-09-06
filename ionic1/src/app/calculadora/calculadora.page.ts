import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
nota1 = '';
nota2 = '';
nota3 = '';
total : any = '';
prom : any = 0;
aprueba : boolean = false;
  constructor(private toastController: ToastController,
    private alertContorller:AlertController) {
    }
    
  ngOnInit() {
  }

  async calcular()
  {
    this.total = this.nota1 + this.nota2 + this.nota3;
    this.prom = this.total / 3;
    if (this.prom >= 4.0){
      this.aprueba = true;
    }
    

    if (this.aprueba){
      const toast = await this.toastController.create({
        message: 'Aprobado, Su promedio es '+ this.total ,
        duration : 3000,
        position : 'bottom',
        
      });
      await toast.present();
      this.aprueba = !this.aprueba
    }
    else{
      
      const alert = await this.alertContorller.create({
      
        header : 'Reprobado',
        subHeader : 'su promedio es',
        message : this.prom,
        buttons : ['cerrar'],
      });
  
  await alert.present();
    }
    
  }
  
  
}
