import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiniBanking {
  private API_URL : string;
  private request : string;
  constructor() {
    this.API_URL = '/accounts';
    this.request = "";
  }

  getBalance() {
    this.request = `/1/balance`;
    return fetch(this.API_URL+this.request).then((response) => response.json());
  }

  getMovements() {
    this.request = `/1/transactions`;
    return fetch(this.API_URL+this.request).then((response) => response.json());
  }

  getMovementDetails(movementId: number) {
    this.request = `/1/transactions/${movementId}`;
    return fetch(this.API_URL+this.request).then((response) => response.json());
  }

  setDeposit(amount: number) {
    this.request = `/1/deposits`;
    return fetch(this.API_URL + this.request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }).then((response) => response.json());
  }
}