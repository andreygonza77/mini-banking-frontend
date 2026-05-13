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
    this.request = "/1/balance";
    return fetch(this.API_URL+this.request).then((response) => response.json());
  }
}
