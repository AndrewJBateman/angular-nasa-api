import { Component, OnInit } from "@angular/core";
import { NasaService } from "../services/nasa.service";
import { Apod } from "../models/apod";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "ngNasaApi";

  public nasaImgObj: Apod;

  constructor(private nasaApi: NasaService) {}

  ngOnInit(): void {
    this.nasaApi.getNasaImage().subscribe((response: Apod) => {
      this.nasaImgObj = response;
    });
  }
}
