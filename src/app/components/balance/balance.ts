import { Component, OnInit } from '@angular/core';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance',
  imports: [CommonModule],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance implements OnInit {
  balance: any;

  constructor(private miniBanking: MiniBanking) {}

  ngOnInit() {
    this.getBalance();
  }

   getBalance() {
    this.miniBanking.getBalance()
      .then((data) => {
        console.log('Balance response:', data);
        this.balance = data;
      })
    .catch((error) => {
        console.error('Error fetching balance:', error);
      });
  }
}
