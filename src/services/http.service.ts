import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL : string = "http://localhost:9090/"

  constructor() { }

  async getAllSomething(caminho : string){
    // console.log((await axios.get(this.URL+caminho)).data);
    return (await axios.get(this.URL+caminho)).data
  }

  async getVendas(){
    console.log(((await axios.get("http://localhost:9090/venda")).data))
    return (await axios.get("http://localhost:9090/venda")).data
  }

}
