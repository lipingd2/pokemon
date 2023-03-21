import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { PokemonCardDetail, PokemonResponse } from '../interfaces/pokemonlist';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pdetail: PokemonCardDetail[] = [];
  pdetails$ = new BehaviorSubject<PokemonCardDetail[]>([]);
  constructor(private http: HttpClient) { }

  //ID, weight, height, and types
  getPokemonDetail(name: string) { 
    const url = "https://pokeapi.co/api/v2/pokemon/" + name
    return this.http.get<PokemonResponse>(url).pipe(
      map((detail: PokemonResponse) => ({ 
        id: detail.id,
        weight: detail.weight,
        height: detail.height,
        types: detail.types,
        sprites:detail.sprites
      })),
      tap((detail: PokemonCardDetail) => { 
        this.pdetail.push(detail)
        this.pdetails$.next(this.pdetail);
      })
    )
  }
}
