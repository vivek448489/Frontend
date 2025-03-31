import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule,FaqComponent,FooterComponent]
})
export class HomeComponent {
  doctors = [
    {
      name: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
      experience: '15+ years',
      description: 'Specializing in cardiovascular health and preventive cardiology'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
      experience: '12+ years',
      description: 'Expert in neurological disorders and brain health'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
      experience: '10+ years',
      description: 'Dedicated to providing comprehensive pediatric care'
    },
    {
      name: 'Dr. James Anderson',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
      experience: '20+ years',
      description: 'Specializing in joint replacement and sports medicine'
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300',
      experience: '14+ years',
      description: 'Expert in skin health and cosmetic dermatology'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'General Physician',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
      experience: '18+ years',
      description: 'Providing comprehensive primary care services'
    }
  ];

  services = [
    {
      name: 'Emergency Care',
      description: '24/7 emergency medical services with state-of-the-art facilities',
      icon: '🏥'
    },
    {
      name: 'Online Consultation',
      description: 'Virtual consultations from the comfort of your home',
      icon: '💻'
    },
    {
      name: 'Specialized Treatment',
      description: 'Expert care across multiple medical specialties',
      icon: '👨‍⚕️'
    },
    {
      name: 'Lab Services',
      description: 'Comprehensive laboratory and diagnostic services',
      icon: '🔬'
    },
    {
      name: 'Preventive Care',
      description: 'Regular health check-ups and preventive medicine',
      icon: '🛡️'
    },
    {
      name: 'Rehabilitation',
      description: 'Physical therapy and rehabilitation services',
      icon: '🤸'
    }
  ];

  stats = [
    { number: '50+', label: 'Expert Doctors' },
    { number: '10k+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Care' }
  ];
}