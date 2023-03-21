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
  @Input() index!:number
  @Output() idemiter = new EventEmitter<{name:string, detail:PokemonCardDetail, index:number}>();
  ngOnInit(): void {
    
  }

  constructor() { 

  }

  getPokemon() {
    this.idemiter.emit({name:this.pokemonN, detail:this.pokemonD, index:this.index})
  }
}
