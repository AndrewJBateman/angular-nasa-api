import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class NasaService {

	constructor(private http: HttpClient) { }

	public getNasaImage(): Observable<string> {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		const apiKey = 'APIKEY';
		const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${apiKey}&hd=true`;
		return this.http.get<string>(apodUrl);
	}
}
