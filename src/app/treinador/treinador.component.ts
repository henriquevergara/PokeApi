import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Treinador } from './treinador.model';


@Component({
  selector: 'app-treinador',
  templateUrl: './treinador.component.html',
  styleUrls: ['./treinador.component.css']
})
export class TreinadorComponent implements OnInit {

  treinadores: Treinador[] = [];
  i: number = 0;

  constructor() { }

  ngOnInit() {
      
  }

  addTreinador(form : NgForm){
    const value = form.value;
    const novoTreinador = new Treinador(value.nome,value.idade);
    this.treinadores[this.i] = novoTreinador;
    this.i++;
  }

}
