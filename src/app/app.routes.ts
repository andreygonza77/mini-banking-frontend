import { inject } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { Deposit } from './components/deposit/deposit';
import { Withdrawal } from './components/withdrawal/withdrawal';
import { MovementDetails } from './components/movement-details/movement-details';
import { Movements } from './components/movements/movements';
import { Balance } from './components/balance/balance';
import { ConvertFiat } from './components/convert-fiat/convert-fiat';
import { ConvertCrypto } from './components/convert-crypto/convert-crypto';
import { Login } from './components/login/login';
import { MiniBanking } from './services/mini-banking';

const requireLogin = () => {
  const auth = inject(MiniBanking);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.parseUrl('/login');
};

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'deposit', component: Deposit, canActivate: [requireLogin] },
    { path: 'withdrawal', component: Withdrawal, canActivate: [requireLogin] },
    { path: 'movements', component: Movements, canActivate: [requireLogin] },
    { path: 'movements/:id', component: MovementDetails, canActivate: [requireLogin] },
    { path: 'balance', component: Balance, canActivate: [requireLogin] },
    { path: 'convert-fiat', component: ConvertFiat, canActivate: [requireLogin] },
    { path: 'convert-crypto', component: ConvertCrypto, canActivate: [requireLogin] },
    { path: '**', redirectTo: '' }
];
