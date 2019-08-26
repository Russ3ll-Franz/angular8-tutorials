import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../_model/genero';

@Injectable({
	providedIn: 'root'
})
export class GeneroService {


	constructor(private http: HttpClient) {
	}

	listar() {
		/* return this.http.get<Genero[]>(`${environment.host}/generos`); */
		return this.http.get<Genero[]>(`assets/generos.json`);
	}
}
