import { Component } from '@angular/core';
import { HealthPackage } from '../../models/healthpackage.model';
import { HealthPackageService } from '../../services/health-package.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-health-checkup',
  imports: [CommonModule,FormsModule],
  templateUrl: './health-checkup.component.html',
  styleUrl: './health-checkup.component.css'
})
export class HealthCheckupComponent {
  searchQuery: string = '';
  packages: HealthPackage[] = [];
  filteredPackages: HealthPackage[] = [];

  constructor(
    private healthPackageService: HealthPackageService,
    private router: Router
  ) {
    this.packages = this.healthPackageService.getHealthPackages();
    this.filteredPackages = [...this.packages];
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.filteredPackages = this.healthPackageService.searchPackages(this.searchQuery);
    } else {
      this.filteredPackages = [...this.packages];
    }
  }

  onPackageClick(healthPackage: HealthPackage): void {
    const routePath = healthPackage.name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate([routePath]);
  }
}
