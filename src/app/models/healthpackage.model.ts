export interface HealthPackage {
  id: number;
  name: string;
  icon?: string;
  startingPrice?: number; // Marked as optional
  description?: string;   // Marked as optional
  testsIncluded: any;
  tests: any;
  hospital: any;
  price: any;
}


  export interface Category {
    id: number;
    name: string;
    packages: HealthPackage[];
  }