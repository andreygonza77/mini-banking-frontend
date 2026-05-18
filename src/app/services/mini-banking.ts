import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiniBanking {
  private readonly API_URL: string = '/accounts';

  constructor() {}

  getBalance() {
    const request = `/1/balance`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  getMovements() {
    const request = `/1/transactions`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  getMovementDetails(movementId: number) {
    const request = `/1/transactions/${movementId}`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  setDeposit(amount: number) {
    const request = `/1/deposits`;
    return fetch(this.API_URL + request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }).then((response) => response.json());
  }
}