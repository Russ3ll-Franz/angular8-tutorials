import { Component, OnInit } from '@angular/core';
import { Genero } from './../_model/genero';
import { GeneroService } from './../_service/genero.service';

@Component({
	selector: 'genero',
	templateUrl: './genero.component.html',
	styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

	constructor(private _generoService: GeneroService) { }
	generos: Genero[];

	ngOnInit() {
		this._generoService.listar().subscribe(data => {
			this.generos = data;
		});
	}

}
