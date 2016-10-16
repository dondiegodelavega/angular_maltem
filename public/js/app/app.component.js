"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_service_1 = require('./pokemon.service');
var search_pipe_1 = require('./search.pipe');
var AppComponent = (function () {
    function AppComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.pokemons = [];
        this.pokemon = [];
        // to store base details of selected pokemon
        this.pokemonBase = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all pokemons with minified details for the left panel
        this.pokemonService.getPokemons().subscribe(function (response) { return _this.pokemons = response; }, function (error) { return console.log(error); });
        // get the first pokemon detail
        this.pokemonService.getPokemon("001").subscribe(function (response) {
            _this.pokemon = response;
            _this.pokemonBase = response.base;
        }, function (error) { return console.log(error); });
    };
    // on click get details af a pokemon by id
    AppComponent.prototype.onPokemonClicked = function (id) {
        var _this = this;
        this.pokemonService.getPokemon(id).subscribe(function (response) {
            _this.pokemon = response;
            _this.pokemonBase = response.base;
        }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            pipes: [search_pipe_1.SearchPipe],
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [pokemon_service_1.PokemonService]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCw0QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFTM0M7SUFDSSxzQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR2xELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsNENBQTRDO1FBQzVDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBTm1DLENBQUM7SUFRckQsK0JBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsNERBQTREO1FBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN2QyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7UUFFRiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUMzQyxVQUFBLFFBQVE7WUFDSixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDckMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsdUNBQWdCLEdBQWhCLFVBQWlCLEVBQUU7UUFBbkIsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3hDLFVBQUEsUUFBUTtZQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ04sQ0FBQztJQTFDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsS0FBSyxFQUFHLENBQUMsd0JBQVUsQ0FBQztZQUNwQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBQyxDQUFDLGdDQUFjLENBQUM7U0FDN0IsQ0FBQzs7b0JBQUE7SUFxQ0YsbUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLG9CQUFZLGVBb0N4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuL3Bva2Vtb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hQaXBlIH0gZnJvbSAnLi9zZWFyY2gucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcGlwZXMgOiBbU2VhcmNoUGlwZV0sXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczpbUG9rZW1vblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSl7fVxuICAgIC8vIHNlYXJjaCBib3ggdmFyaWFibGVcbiAgICBzZWFyY2hUZXh0OnN0cmluZztcbiAgICBwb2tlbW9ucyA9IFtdO1xuICAgIHBva2Vtb24gPSBbXTtcbiAgICAvLyB0byBzdG9yZSBiYXNlIGRldGFpbHMgb2Ygc2VsZWN0ZWQgcG9rZW1vblxuICAgIHBva2Vtb25CYXNlID0gW107XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICAvLyBnZXQgYWxsIHBva2Vtb25zIHdpdGggbWluaWZpZWQgZGV0YWlscyBmb3IgdGhlIGxlZnQgcGFuZWxcbiAgICAgICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHRoaXMucG9rZW1vbnMgPSByZXNwb25zZSxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGdldCB0aGUgZmlyc3QgcG9rZW1vbiBkZXRhaWxcbiAgICAgICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKFwiMDAxXCIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2Vtb24gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2Vtb25CYXNlID0gcmVzcG9uc2UuYmFzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBvbiBjbGljayBnZXQgZGV0YWlscyBhZiBhIHBva2Vtb24gYnkgaWRcbiAgICBvblBva2Vtb25DbGlja2VkKGlkKXtcbiAgICAgICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlbW9uID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlbW9uQmFzZSA9IHJlc3BvbnNlLmJhc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==
