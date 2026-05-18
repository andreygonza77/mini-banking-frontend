import { Component, signal } from '@angular/core';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movements',
  imports: [CommonModule],
  templateUrl: './movements.html',
  styleUrl: './movements.css',
})
export class Movements {
   
  movements = signal<any[] | null>(null);
  constructor(private miniBanking: MiniBanking) {}

  ngOnInit() {
    this.getMovements();
  }

  getMovements() {
    this.miniBanking.getMovements().then((data) => {
      console.log('Movements response:', data); 
      this.movements.set(data);
    } ).catch((error) => {
      console.error('Error fetching movements:', error);
    });
  }
}
