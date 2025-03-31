import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { HealthPackage } from '../../models/health-package.model';
import  {HealthPackage} from '../../models/healthpackage.model';
@Component({
  selector: 'app-package-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css'
})
export class PackageCardComponent {
  @Input() package!: HealthPackage;
}
