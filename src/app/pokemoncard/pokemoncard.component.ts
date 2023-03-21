import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonCardDetail } from '../interfaces/pokemonlist';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit{
  @Input() pokemonD!: PokemonCardDetail 
  @Input() pokemonN!: string
  @Output() idemiter = new EventEmitter<{name:string, detail:PokemonCardDetail}>();
  ngOnInit(): void {
    
  }

  constructor() { 

  }

  getPokemon() {
    this.idemiter.emit({name:this.pokemonN, detail:this.pokemonD})
  }
}
