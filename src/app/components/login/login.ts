import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MiniBanking } from '../../services/mini-banking';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '1';
  password = '2026-04-24 18:03:58';
  error = '';
  isLoading = false;

  constructor(private miniBanking: MiniBanking, private router: Router) {}

  onLogin() {
    this.error = '';
    const username = this.username.trim();
    const password = this.password.trim();

    if (!username) {
      this.error = 'Please enter your account ID';
      return;
    }

    if (!password) {
      this.error = 'Please enter your login password';
      return;
    }

    this.isLoading = true;
    this.miniBanking.login(username, password)
    .then(() => {
        this.router.navigate(['/balance']);
    })
    .catch((err) => {
        console.error('Login error:', err);
        this.error = err?.message ?? 'Invalid account ID or password';
    })
    .finally(() => {
        this.isLoading = false; 
    });
  }
}
