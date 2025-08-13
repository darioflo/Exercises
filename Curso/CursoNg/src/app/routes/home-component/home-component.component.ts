import { Component } from '@angular/core';
import { PhotoComponentComponent } from "../../components/photo-component/photo-component.component";

@Component({
  selector: 'app-home-component',
  imports: [PhotoComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
