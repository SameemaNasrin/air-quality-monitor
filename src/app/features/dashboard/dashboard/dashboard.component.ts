import { Component } from '@angular/core';
import { NearbyComponent } from '../components/nearby/nearby.component';
import { AllDevicesComponent } from '../components/all-devices/all-devices.component';
import { MasterControlComponent } from '../components/master-control/master-control.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NearbyComponent, AllDevicesComponent, MasterControlComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
