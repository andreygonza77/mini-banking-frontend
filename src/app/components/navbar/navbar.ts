import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MiniBanking } from '../../services/mini-banking';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  constructor(public miniBanking: MiniBanking, private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.miniBanking.logout();
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }
}
