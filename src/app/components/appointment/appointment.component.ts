import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class AppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'General Medicine'
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { // ✅ Inject HttpClient
    this.appointmentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      symptoms: ['', [Validators.required, Validators.minLength(10)]],
      previousHistory: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.appointmentForm);
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.http.post(' https://healthcare-plus-production.up.railway.app/api/appointment/generate-pdf', this.appointmentForm.value, {
        responseType: 'blob' // Important for handling binary files (PDF)
      }).subscribe((response: Blob) => {
        // Create a URL for the blob and open/download it
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AppointmentConfirmation.pdf';
        link.click();
        
        // Revoke the object URL after downloading
        window.URL.revokeObjectURL(url);
        this.sendEmail(this.appointmentForm.value);
        this.appointmentForm.reset(); 
      }, (error: any) => {
        console.error('Error generating PDF', error);
      });
    }
  }
  sendEmail(formData: any) {
    const emailParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      symptoms: formData.symptoms,
      previousHistory: formData.previousHistory
    };
    emailjs.send('service_h1ex9fb', 'template_jqb4ru1', emailParams, '1m3iRvDPcjZalKuFh')
    .then(() => {
      console.log('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email', error);
    });
  }

    GoBack() {
        window.history.back();
    }
}
