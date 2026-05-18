import { Component, signal } from '@angular/core';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-crypto',
  imports: [CommonModule, FormsModule],
  templateUrl: './convert-crypto.html',
  styleUrl: './convert-crypto.css',
})
export class ConvertCrypto {
  target = signal<'BTC' | 'ETH' | 'DOGE' | 'ADA' | 'XRP' | 'LTC' | 'BCH'>('BTC');
  result = signal<string>('');
  error = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(private miniBanking: MiniBanking) {}

  onConvert() {
    this.isLoading.set(true);
    this.error.set('');
    this.result.set('');

    const currency = this.target();
    const label = this.target();

    this.miniBanking.convertToCrypto(currency)
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
        console.error('Convert crypto error:', error);
        this.error.set('Unable to convert currency. Please try again later.');
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }
}
