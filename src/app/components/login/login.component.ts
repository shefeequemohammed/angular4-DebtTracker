import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.router.navigate(['/login']);
      });
  }

}
