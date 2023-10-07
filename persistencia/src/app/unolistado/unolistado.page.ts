import { Component, OnInit } from '@angular/core';
import { CrudService } from '../uno/crud.service';


@Component({
  selector: 'app-unolistado',
  templateUrl: './unolistado.page.html',
  styleUrls: ['./unolistado.page.scss'],
})
export class UnolistadoPage implements OnInit {
  personas:any = [];
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.listar().then(x=> {this.personas = x;}) ;
  }

}
