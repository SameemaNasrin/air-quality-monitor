import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)
@Component({
  selector: 'app-nearby',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule,MatIconModule, MatSliderModule],
  templateUrl: './nearby.component.html',
  styleUrl: './nearby.component.css'
})
export class NearbyComponent {

}
