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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var PokemonService = (function () {
    function PokemonService(http) {
        this.http = http;
    }
    // service to get list of pokemons minified
    PokemonService.prototype.getPokemons = function () {
        return this.http.get('http://localhost:3000/pokemons')
            .map(function (data) {
            return data.json();
        });
    };
    // service to get details of a pokemon
    PokemonService.prototype.getPokemon = function (id) {
        return this.http.get('http://localhost:3000/pokemon/' + id)
            .map(function (data) {
            return data.json();
        });
    };
    PokemonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQzNCLENBQUMsQ0FEeUM7QUFDMUMscUJBQStCLGVBQy9CLENBQUMsQ0FENkM7QUFFOUMsUUFBTyxTQUdQLENBQUMsQ0FIZTtBQUloQjtJQUNJLHdCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFFLENBQUM7SUFFaEMsMkNBQTJDO0lBQzNDLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7YUFDakQsR0FBRyxDQUFDLFVBQUMsSUFBYTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxFQUFFLENBQUM7YUFDdEQsR0FBRyxDQUFDLFVBQUMsSUFBYTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBbEJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvQmIscUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHNCQUFjLGlCQW1CMUIsQ0FBQSIsImZpbGUiOiJwb2tlbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL29ic2VydmFibGUnXG5pbXBvcnQgJ3J4anMvUngnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBva2Vtb25TZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXt9XG5cbiAgICAvLyBzZXJ2aWNlIHRvIGdldCBsaXN0IG9mIHBva2Vtb25zIG1pbmlmaWVkXG4gICAgZ2V0UG9rZW1vbnMoKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9rZW1vbnMnKVxuICAgICAgICAgICAgLm1hcCgoZGF0YTpSZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXJ2aWNlIHRvIGdldCBkZXRhaWxzIG9mIGEgcG9rZW1vblxuICAgIGdldFBva2Vtb24oaWQ6IHN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bva2Vtb24vJyArIGlkKVxuICAgICAgICAgICAgLm1hcCgoZGF0YTpSZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=
