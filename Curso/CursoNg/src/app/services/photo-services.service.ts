import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Drink } from '../models/Drink';

@Injectable({
  providedIn: 'root'
})
export class PhotoServicesService {

  private httpClient = inject(HttpClient)
  private url: string = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

  getPhotos(){
    return this.httpClient.get<any>(this.url)
  }
}
