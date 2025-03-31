import { Component } from '@angular/core';
import { PackageCardComponent } from '../package-card/package-card.component';
import { healthCategories } from '../../data/package.data/package.data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommend',
  imports: [ PackageCardComponent, CommonModule],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css'
})
export class RecommendComponent {
  RecommendPackage = healthCategories.find(cat => cat.id === 1)?.packages || [];
    goBack(): void {
      window.history.back();
    }

}
