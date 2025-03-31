import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from '../package-card/package-card.component';
import { healthCategories } from '../../data/package.data/package.data.component';
@Component({
  selector: 'app-diabetes',
  imports: [PackageCardComponent, CommonModule],
  templateUrl: './diabetes.component.html',
  styleUrl: './diabetes.component.css'
})
export class DiabetesComponent {
  diabetesPackages = healthCategories.find(cat => cat.id === 4)?.packages || [];
  goBack(): void {
    window.history.back();
  }
  
}
