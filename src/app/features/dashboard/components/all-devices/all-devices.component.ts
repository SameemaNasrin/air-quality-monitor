import { Component } from '@angular/core';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

export interface TempDetails {
  title: string,
  activity: string,
  temp: number,
  toggle: boolean
}

export interface ActivityArray{
    activity: string,
    aqi: string,
    toggleDisplay:boolean,
    toggle: boolean
    
}

export interface AQIDetails {
  title: string;
  activityArray: ActivityArray[]
}

@Component({
  selector: 'app-all-devices',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule, RouterModule, MatSlideToggleModule, MatTableModule],
  templateUrl: './all-devices.component.html',
  styleUrl: './all-devices.component.css'
})
export class AllDevicesComponent {
  items: string[] = ["Living room", "Dining room", "Master bedroom", "Master kitchen", "Guest room", "Guest bathroom"];
  tempL: TempDetails[] = [{
    "title": "L-01",
    "activity": "Running",
    "temp":24,
    "toggle":true
  },
  {
    "title": "L-02",
    "activity": "Running",
    "temp":24,
    "toggle":true
  },
  {
    "title": "L-03",
    "activity": "Not running",
    "temp":24,
    "toggle":false
  }
  ];

  aqiDetails: AQIDetails[] = [{
    title:"AQI-01",
    activityArray:[{
      activity:"Running",
      aqi:"97* US AQI",
      toggleDisplay:true,
      toggle:true
    },
    {
      activity:"Main pollutent - PM2.5",
      aqi:"",
      toggleDisplay:false,
      toggle:true
    }]

  }
  ];
  changeTemp(action:string, title:string){
    if(action == '+'){
      this.tempL.filter((e)=> e.title == title).map((e) => e.temp+=1);
    }
    else{
      this.tempL.filter((e)=> e.title == title).map((e) => e.temp-=1);
    }
  }

}
