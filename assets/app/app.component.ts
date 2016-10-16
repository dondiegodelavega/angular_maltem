import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { SearchPipe } from './search.pipe';

@Component({
    moduleId: module.id,
    pipes : [SearchPipe],
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers:[PokemonService]
})
export class AppComponent implements OnInit{
    constructor(private pokemonService: PokemonService){}
    // search box variable
    searchText:string;
    pokemons = [];
    pokemon = [];
    // to store base details of selected pokemon
    pokemonBase = [];

    ngOnInit(){
        // get all pokemons with minified details for the left panel
        this.pokemonService.getPokemons().subscribe(
            response => this.pokemons = response,
            error => console.log(error)
        );

        // get the first pokemon detail
        this.pokemonService.getPokemon("001").subscribe(
            response => {
                this.pokemon = response;
                this.pokemonBase = response.base;
            },
            error => console.log(error)
        );
    }

    // on click get details af a pokemon by id
    onPokemonClicked(id){
        this.pokemonService.getPokemon(id).subscribe(
            response => {
                this.pokemon = response;
                this.pokemonBase = response.base;
            },
            error => console.log(error)
        );
    }
}