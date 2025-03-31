import { Injectable } from '@angular/core';
import { HealthPackage } from '../models/healthpackage.model';
@Injectable({
  providedIn: 'root'
})
export class HealthPackageService {
  private packages: HealthPackage[] = [
    {
      id: 1,
      name: 'Recommended',
      icon: 'bi-star-fill',
      startingPrice: 4350,
      description: 'Comprehensive health checkup packages',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 2,
      name: 'Pre-Conception',
      icon: 'bi-heart',
      startingPrice: 3800,
      description: 'Complete pre-pregnancy checkup',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 3,
      name: 'Cancer Screening',
      icon: 'bi-clipboard2-pulse',
      startingPrice: 799,
      description: 'Early detection and prevention',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 4,
      name: 'Diabetes',
      icon: 'bi-activity',
      startingPrice: 999,
      description: 'Diabetes screening and monitoring',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 5,
      name: 'General Health',
      icon: 'bi-hospital',
      startingPrice: 786,
      description: 'Basic health assessment',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 6,
      name: 'Heart',
      icon: 'bi-heart-pulse',
      startingPrice: 300,
      description: 'Cardiac health evaluation',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 7,
      name: 'Senior Citizen',
      icon: 'bi-person',
      startingPrice: 3500,
      description: 'Elder care health packages',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    },
    {
      id: 8,
      name: 'Women',
      icon: 'bi-gender-female',
      startingPrice: 1800,
      description: 'Women specific health checkups',
      testsIncluded: undefined,
      tests: undefined,
      hospital: undefined,
      price: undefined
    }
  ];

  getHealthPackages(): HealthPackage[] {
    return this.packages;
  }

  searchPackages(query: string): HealthPackage[] {
    return this.packages.filter(pkg => 
      pkg.name.toLowerCase().includes(query.toLowerCase()) ||
      pkg.description?.toLowerCase().includes(query.toLowerCase())
    );
  }
}