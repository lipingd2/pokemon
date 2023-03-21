import { Component, OnInit } from '@angular/core';
import { comfirmPokemon, PokemonCardDetail, PokemonResponse } from '../interfaces/pokemonlist';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  pokemons: string[] = ["bulbasaur", "squirtle", "charmander"];
  pokemonsdetail?: PokemonCardDetail[];
  Selectpokemon = "";
  showselect: boolean = false;
  showButton: boolean = false;
  ngOnInit(): void {
    this.pokemonservice.pdetails$.subscribe((details: PokemonCardDetail[]) => {
      this.pokemonsdetail = details
    });

    for (let p of this.pokemons) {
      this.pokemonservice.getPokemonDetail(p).subscribe()
    }
  }

  constructor(private pokemonservice:PokemonService) { 

  }

  comfirmDetail(detail:comfirmPokemon) { 
    let p = "Do you want to select " + detail.name + "?"
    if (confirm(p) === true) {
      this.Selectpokemon = detail.name
      this.showselect = true
      this.showButton = true
    }
  }

  chooseAgain() {
    this.showButton = false
    this.showselect = false
  }
}
