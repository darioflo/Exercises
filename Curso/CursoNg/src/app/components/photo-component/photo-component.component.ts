import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/Drink';
import { PhotoServicesService } from '../../services/photo-services.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-photo-component',
  imports: [NgFor],
  templateUrl: './photo-component.component.html',
  styleUrl: './photo-component.component.css'
})
export class PhotoComponentComponent implements OnInit{
    drinks! : Drink[]
    private photoService = inject(PhotoServicesService)


    ngOnInit(): void {
      this.getAllPhotos()
    }

    getAllPhotos (){
      this.photoService.getPhotos().subscribe({
        next:(data)=>{
          this.drinks = data.drinks
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
    }
    
}
