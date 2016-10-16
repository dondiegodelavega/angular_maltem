import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/Rx'


@Injectable()
export class PokemonService{
    constructor(private http:Http){}

    // service to get list of pokemons minified
    getPokemons():Observable<any>{
        return this.http.get('http://localhost:3000/pokemons')
            .map((data:Response)=>{
                return data.json();
            });
    }

    // service to get details of a pokemon
    getPokemon(id: string):Observable<any>{
        return this.http.get('http://localhost:3000/pokemon/' + id)
            .map((data:Response)=>{
                return data.json();
            });
    }

}