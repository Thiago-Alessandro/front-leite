import { Component } from '@angular/core';
import { Venda } from 'src/model/venda';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vendas-lacteos';

  vendas:Array<Venda> = new Array

  constructor(private service:HttpService){}

  async getVendas(){
    this.vendas = await this.service.getVendas()
  }

}
