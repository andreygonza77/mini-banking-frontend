import { Routes } from '@angular/router';
import { Deposit } from './components/deposit/deposit';
import { Withdrawal } from './components/withdrawal/withdrawal';
import { MovementDetails } from './components/movement-details/movement-details';
import { Movements } from './components/movements/movements';
import { Balance } from './components/balance/balance';
import { ConvertFiat } from './components/convert-fiat/convert-fiat';
import { ConvertCrypto } from './components/convert-crypto/convert-crypto';

export const routes: Routes = [
    { path: '', component: Balance },
    { path: 'deposit', component: Deposit },
    { path: 'withdrawal', component: Withdrawal },
    { path: 'movements', component: Movements },
    { path: 'movements/:id', component: MovementDetails },
    { path: 'balance', component: Balance },
    { path: 'convert-fiat', component: ConvertFiat },
    { path: 'convert-crypto', component: ConvertCrypto },
    { path: '**', redirectTo: '' } 
];
