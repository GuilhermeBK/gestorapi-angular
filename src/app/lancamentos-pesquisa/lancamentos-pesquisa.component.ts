import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [ 
    {dataVencimento: '12/12/12', pessoa:'gui', descricao:'descricao', valor:'1000', dataPagamento:null, tipo:'DESPESA'},
      {dataVencimento: '12/12/12', pessoa:'gui', descricao:'descricao', valor:'1000', dataPagamento:'12/21/2003', tipo:'CREDITO'}
  
    ];

}
