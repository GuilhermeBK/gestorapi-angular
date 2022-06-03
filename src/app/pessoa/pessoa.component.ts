import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {

  pessoas = [ 
    {nome: 'gui', cidade:'gui', estado:'descricao', valor:'1000', ativo:true},
    {nome: 'guilherme', cidade:'gui', estado:'descricao', valor:'1000', ativo:false},
  
    ];
}
