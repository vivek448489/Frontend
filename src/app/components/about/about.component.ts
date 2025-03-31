import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule,],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }

  coreValues = [
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment and innovative treatment methods for optimal patient outcomes.',
      icon: 'fas fa-microscope'
    },
    {
      title: 'Expert Care Team',
      description: 'Board-certified physicians and specialized healthcare professionals dedicated to your wellbeing.',
      icon: 'fas fa-user-md'
    },
    {
      title: 'Patient-Centered Approach',
      description: 'Personalized treatment plans and compassionate care tailored to your unique needs.',
      icon: 'fas fa-heart'
    }
  ];

  teamMembers = [
    {
      name: 'Dr. Sarah Anderson',
      role: 'Chief of Surgery',
      credentials: 'MD, FACS - Harvard Medical School',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Cardiology',
      credentials: 'MD, PhD - Johns Hopkins University',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Neurologist',
      credentials: 'MD - Stanford Medical School',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  ];

  statistics = [
    { value: '30+', label: 'Years of Excellence', icon: 'fas fa-calendar-alt' },
    { value: '50k+', label: 'Patients Treated', icon: 'fas fa-users' },
    { value: '200+', label: 'Medical Experts', icon: 'fas fa-user-md' },
    { value: '99%', label: 'Patient Satisfaction', icon: 'fas fa-heart' }
  ];

  testimonials = [
    {
      content: 'The level of expertise and care I received was exceptional. The medical team went above and beyond to ensure my complete recovery.',
      name: 'Michael Thompson',
      treatment: 'Cardiac Surgery',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      content: 'From the moment I walked in, I felt cared for. The staff\'s dedication and the advanced facilities made my recovery journey smooth and successful.',
      name: 'Maria Rodriguez',
      treatment: 'Neurology Treatment',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
      content: 'The preventive care program is outstanding. The doctors take time to understand your health goals and create personalized care plans.',
      name: 'David Chen',
      treatment: 'Preventive Care',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
    }
  ];
 
}