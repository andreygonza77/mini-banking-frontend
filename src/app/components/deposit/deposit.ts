import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiniBanking } from '../../services/mini-banking';

@Component({
  selector: 'app-deposit',
  imports: [FormsModule, CommonModule],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css',
})
export class Deposit {
  amount = signal<number | null>(null);
  description = signal<string>('');
  isLoading = signal<boolean>(false);
  message = signal<string>('');
  isSuccess = signal<boolean>(false);

  constructor(private miniBanking: MiniBanking) {}

  onDeposit() {
    if (this.amount() === null || this.amount()! <= 0) {
      this.message.set('Please enter a valid amount');
      this.isSuccess.set(false);
      return;
    }

    if (!this.description().trim()) {
      this.message.set('Please enter a deposit description');
      this.isSuccess.set(false);
      return;
    }

    this.isLoading.set(true);
    this.message.set('');

    this.miniBanking.setDeposit(this.amount()!, this.description().trim())
      .then((response) => {
        console.log('Deposit response:', response);
        this.message.set('Deposit successful!');
        this.isSuccess.set(true);
        this.amount.set(null);
        this.description.set('');
      })
      .catch((error) => {
        console.error('Error during deposit:', error);
        this.message.set('Error processing deposit. Please try again.');
        this.isSuccess.set(false);
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }
}
