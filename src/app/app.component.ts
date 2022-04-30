import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [ 
  {dataVencimento: '12/12/12', pessoa:'gui', descricao:'descricao', valor:'1000', dataPagamento:null, tipo:'DESPESA'},
    {dataVencimento: '12/12/12', pessoa:'gui', descricao:'descricao', valor:'1000', dataPagamento:'12/21/2003', tipo:'CREDITO'}

  ];
}
