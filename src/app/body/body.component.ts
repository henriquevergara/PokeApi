import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../rest.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  url: string;
  imagem: string;
  pokemon: any = [];
  nome: string;
  b: boolean;
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.b = true;
  }

  geraRandomicamente(){
    const x = Math.floor(Math.random() * 350) + 1  ;
    this.url = 'https://pokeapi.co/api/v2/pokemon/' + x;
    this.rest.getPokemon(this.url.toLowerCase()).subscribe((data: {}) => {
      this.pokemon = data;
      this.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon.id + ".png";
      this.b=false;
    });
  }


  gravaPokemon(form: NgForm){
    const formulario = form.value;
    this.url = "https://pokeapi.co/api/v2/pokemon/" + formulario.pokemon;
    this.rest.getPokemon(this.url.toLowerCase()).subscribe((data: {}) => {
      this.pokemon = data;
      this.imagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemon.id + ".png";
      this.b = false;
    });
    form.resetForm();

  }

  checkVetor(){
    if (typeof this.pokemon !== 'undefined' && this.pokemon.length > 0) {
        console.log('Tem poke');
    } else {
      console.log(this.pokemon);
    }
  }

}
