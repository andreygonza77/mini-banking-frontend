import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiniBanking } from '../../services/mini-banking';

@Component({
  selector: 'app-withdrawal',
  imports: [FormsModule, CommonModule],
  templateUrl: './withdrawal.html',
  styleUrl: './withdrawal.css',
})
export class Withdrawal {
  amount = signal<number | null>(null);
  isLoading = signal<boolean>(false);
  message = signal<string>('');
  isSuccess = signal<boolean>(false);
  description = signal<string>('');

  constructor(private miniBanking: MiniBanking) {}

  onWithdraw() {
    if (this.amount() === null || this.amount()! <= 0) {
      this.message.set('Please enter a valid amount');
      this.isSuccess.set(false);
      return;
    }

    if (!this.description().trim()) {
      this.message.set('Please enter a withdrawal description');
      this.isSuccess.set(false);
      return;
    }

    this.isLoading.set(true);
    this.message.set('');

    this.miniBanking.withdraw(this.amount()!, this.description().trim())
      .then((response) => {
        console.log('Withdrawal response:', response);
        this.message.set('Withdrawal successful!');
        this.isSuccess.set(true);
        this.amount.set(null);
        this.description.set('');
      })
      .catch((error) => {
        console.error('Error during withdrawal:', error);
        this.message.set('Error processing withdrawal. Please try again.');
        this.isSuccess.set(false);
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }
}
