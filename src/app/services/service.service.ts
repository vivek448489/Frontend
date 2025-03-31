import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [
    {
      id: 1,
      title: 'Emergency Care',
      description: 'Immediate medical attention for life-threatening conditions. Our emergency department is equipped with state-of-the-art technology and staffed by experienced emergency physicians.',
      icon: 'bi-bandaid-fill',
      features: [
        '24/7 Emergency Services',
        'Rapid Response Teams',
        'Advanced Life Support',
        'Trauma Center'
      ],
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Telehealth Services',
      description: 'Virtual consultations with healthcare professionals from the comfort of your home. Connect with doctors via video calls for diagnoses, follow-ups, and medical advice.',
      icon: 'bi-camera-video-fill',
      features: [
        'Secure Video Consultations',
        'Digital Prescriptions',
        'Follow-up Care',
        'Online Health Records'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Laboratory & Diagnostics',
      description: 'Comprehensive testing services for accurate diagnosis and treatment planning. Our modern laboratory offers a wide range of tests with quick turnaround times.',
      icon: 'bi-microscope-fill',
      features: [
        'Blood Tests',
        'Imaging Services',
        'Pathology',
        'Genetic Testing'
      ],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Preventive Care',
      description: 'Regular check-ups and screenings to maintain good health and prevent diseases. Our preventive care programs are designed to detect health issues before they become serious.',
      icon: 'bi-shield-fill-check',
      features: [
        'Annual Check-ups',
        'Vaccinations',
        'Health Screenings',
        'Wellness Programs'
      ],
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Specialized Treatments',
      description: 'Expert care for specific medical conditions and specialized procedures. Our specialists use advanced techniques to treat complex health issues.',
      icon: 'bi-clipboard2-pulse-fill',
      features: [
        'Cardiology',
        'Oncology',
        'Neurology',
        'Orthopedics'
      ],
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      title: 'Mental Health Support',
      description: 'Comprehensive mental health services for emotional well-being. Our mental health professionals provide therapy, counseling, and psychiatric care.',
      icon: 'bi-heart-fill',
      features: [
        'Therapy & Counseling',
        'Psychiatric Services',
        'Stress Management',
        'Addiction Treatment'
      ],
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  constructor() { }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServiceById(id: number): Observable<Service | undefined> {
    const service = this.services.find(s => s.id === id);
    return of(service);
  }
}
