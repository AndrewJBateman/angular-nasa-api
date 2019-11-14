import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ngNasaApi';

  public nasaImgObj = '';

  constructor(private nasaApi: NasaService) { }

  ngOnInit() {
    this.nasaApi.getNasaImage().subscribe(response => {
      this.nasaImgObj = response;
      console.log(response);
    });
  }

}
