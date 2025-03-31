import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private fb:FormBuilder ,private auth: AuthService , private router:Router) {
      
  }
   signUpForm:FormGroup = new FormGroup({
    FirstName:new FormControl("", [Validators.required]),
    LastName:new FormControl("", [Validators.required]),
    Email:new FormControl("", [Validators.required]),
    Username:new FormControl("", [Validators.required]),
    Password:new FormControl("", [Validators.required]),
    });



  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSignUp(){
    console.log(this.signUpForm.value)
    //send object to database , we have two object username && password and all that
     this.auth.signUp(this.signUpForm.value).subscribe({
      next:(res)=>{
        alert(res.message);
        this.signUpForm.reset();
        this.router.navigate(['/login'])
      },
      error:(err)=>{
        alert(err?.error.message)
      }
     })
  }
}
