import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  apiUrl = 'https://localhost:7028/api/Doctors'; // Replace with your actual backend URL (e.g., 'https://localhost:7028/api/Doctors')
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    this.isLoading = true;
    this.error = null;
    this.http.get(this.apiUrl).subscribe({
      next: (data: any) => {
        this.doctors = data;
        this.filteredDoctors = [...this.doctors];
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load doctors. Please try again later.';
        this.isLoading = false;
        console.error('Error fetching doctors:', error);
      }
    });
  }

  filterDoctors(specialty: string): void {
    if (specialty === 'All') {
      this.filteredDoctors = [...this.doctors];
    } else {
      this.filteredDoctors = this.doctors.filter(doctor => doctor.specialty === specialty);
    }
  }

  bookAppointment(doctor: any): void {
    // Open the form in a new window
    window.open('https://form.jotform.com/250633499711461', '_blank');
    
    // Optional: Log the booking for debugging purposes
    console.log(`Booking appointment for ${doctor.name}`);
}



}