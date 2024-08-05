import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-master-control',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './master-control.component.html',
  styleUrl: './master-control.component.css'
})
export class MasterControlComponent {
  isChecked = false;

  onToggle(event: any) {
    console.log(event.checked)
    this.isChecked = event.checked;
  }
}
