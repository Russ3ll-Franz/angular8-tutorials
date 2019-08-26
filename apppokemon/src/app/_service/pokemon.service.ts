import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from './../_model/pokemon';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	constructor(private http: HttpClient) { }

	listar() {
		this.http.get<Pokemon[]>(`${environment.host}/generos`);

	}
}
