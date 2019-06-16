import { Component, OnInit } from '@angular/core';
import { NasaService } from './services/nasa.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
title = 'ngNasaApi';

public nasaImgObj = '';

constructor(private nasaApi: NasaService) {}

ngOnInit() {
this.nasaApi.getNasaImage().subscribe(response => {
	this.nasaImgObj = response;
	console.log(response);
});
}

}
