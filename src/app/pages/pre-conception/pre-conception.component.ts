import { Component } from '@angular/core';
import { healthCategories } from '../../data/package.data/package.data.component';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from '../../pages/package-card/package-card.component';
@Component({
  selector: 'app-pre-conception',
  imports: [PackageCardComponent, CommonModule],
  templateUrl: './pre-conception.component.html',
  styleUrl: './pre-conception.component.css'
})
export class PreConceptionComponent {

  preConceptionPackage = healthCategories.find(cat => cat.id === 2)?.packages || [];
  goBack(): void {
    window.history.back();
  }
}
