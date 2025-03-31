import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from '../package-card/package-card.component';
import { healthCategories } from '../../data/package.data/package.data.component';
@Component({
  selector: 'app-general-health',
  imports: [PackageCardComponent, CommonModule],
  templateUrl: './general-health.component.html',
  styleUrl: './general-health.component.css'
})
export class GeneralHealthComponent {
  generalHealthPackages = healthCategories.find(cat => cat.id === 5)?.packages || [];

  goBack(): void {
    window.history.back();
  }
}
