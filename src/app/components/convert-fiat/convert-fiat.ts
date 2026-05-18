import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MiniBanking } from '../../services/mini-banking';

@Component({
  selector: 'app-convert-fiat',
  imports: [CommonModule, FormsModule],
  templateUrl: './convert-fiat.html',
  styleUrl: './convert-fiat.css',
})
export class ConvertFiat {
  target = signal<'USD' | 'EUR' | 'GBP' | 'FRANKFURT'>('EUR');
  result = signal<string>('');
  error = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(private miniBanking: MiniBanking) {}

  onConvert() {
    this.isLoading.set(true);
    this.error.set('');
    this.result.set('');

    const currency = this.target() === 'FRANKFURT' ? 'EUR' : this.target();
    const label = this.target() === 'FRANKFURT' ? 'Frankfurt (EUR)' : this.target();

    this.miniBanking.convertToFiat(currency)
      .then((response) => {
        let converted;
        if (Array.isArray(response) && response.length > 0 && response[0].converted_balance !== undefined) {
          converted = response[0].converted_balance;
        } else {
          converted = response.converted_balance ?? response.converted_amount ?? response.convertedAmount ?? response.value ?? response.amount ?? response;
        }
        this.result.set(`Total balance converted to ${label}: ${converted}`);
      })
      .catch((error) => {
        console.error('Convert fiat error:', error);
        this.error.set('Unable to convert currency. Please try again later.');
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }
}