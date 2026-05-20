import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiniBanking {
  private readonly API_URL: string = '/accounts';
  private readonly accountIdSignal = signal<number | null>(null);

  constructor() {
    const storedAccountId = localStorage.getItem('accountId');
    if (storedAccountId) {
      const id = Number(storedAccountId);
      if (!Number.isNaN(id) && id > 0) {
        this.accountIdSignal.set(id);
      }
    }
  }

  get accountId(): number | null {
    return this.accountIdSignal();
  }

  isLoggedIn(): boolean {
    return this.accountId !== null;
  }

  private setAccountId(id: number | null) {
    this.accountIdSignal.set(id);
    if (id === null) {
      localStorage.removeItem('accountId');
    } else {
      localStorage.setItem('accountId', String(id));
    }
  }

  login(username: string, password: string) {
    const accountId = Number(username);
    if (Number.isNaN(accountId) || accountId <= 0) {
      return Promise.reject(new Error('Account ID must be a valid number.'));
    }

    return fetch(`${this.API_URL}/${accountId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Account not found.');
        }
        return response.json();
      })
      .then((account: any) => {
        if (!account || account.error || account.created_at !== password) {
          throw new Error('Invalid login credentials.');
        }
        this.setAccountId(accountId);
        return account;
      });
  }

  logout() {
    this.setAccountId(null);
  }

  private ensureLoggedIn(): number {
    const id = this.accountId;
    if (id === null) {
      throw new Error('Not logged in.');
    }
    return id;
  }

  getBalance() {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/balance`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  getMovements() {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/transactions`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  getMovementDetails(movementId: number) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/transactions/${movementId}`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  deleteMovement(movementId: number) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/transactions/${movementId}`;
    return fetch(this.API_URL + request, {
      method: 'DELETE',
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione del movimento.");
      }
      return response;
    });
  }
  
  setDeposit(amount: number, description: string) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/deposits`;
    return fetch(this.API_URL + request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, description }),
    }).then((response) => response.json());
  }

  withdraw(amount: number, description: string) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/withdrawals`;
    return fetch(this.API_URL + request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, description }),
    }).then((response) => response.json());
  }

  convertToFiat(currency: string) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/balance/convert/fiat?to=${currency}`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }

  convertToCrypto(currency: string) {
    const accountId = this.ensureLoggedIn();
    const request = `/${accountId}/balance/convert/crypto?to=${currency}`;
    return fetch(this.API_URL + request).then((response) => response.json());
  }
}
