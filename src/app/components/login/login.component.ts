import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule , RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private fb:FormBuilder , private auth: AuthService , private router:Router){ 
  }

  loginForm:FormGroup = new FormGroup({
    username:new FormControl("", [Validators.required]),
    password:new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onLogin(){
    console.log(this.loginForm.value);
    //send object to database , we have two object username && password
    this.auth.login(this.loginForm.value).subscribe({
      next:(res)=>{
        alert(res.message)
        this.loginForm.reset();
        this.router.navigate(['home']);
      },
      error:(err)=>{
        alert(err?.error.message)
      }
    })

  }

}
