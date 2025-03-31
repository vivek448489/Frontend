import { Component } from '@angular/core';
import { PackageCardComponent } from '../../pages/package-card/package-card.component';
import { healthCategories } from '../../data/package.data/package.data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-senior-citizen',
  imports: [PackageCardComponent, CommonModule],
  templateUrl: './senior-citizen.component.html',
  styleUrl: './senior-citizen.component.css'
})
export class SeniorCitizenComponent {

   SeniorPackage = healthCategories.find(cat => cat.id === 9)?.packages || [];
  
    goBack(): void {
      window.history.back();
    }
}
