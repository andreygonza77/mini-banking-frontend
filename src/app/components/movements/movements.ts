import { Component } from '@angular/core';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movements',
  imports: [CommonModule],
  templateUrl: './movements.html',
  styleUrl: './movements.css',
})
export class Movements {
  movements: any;
  constructor(private miniBanking: MiniBanking) {}

  ngOnInit() {
    this.miniBanking.getMovements().then((data) => {
      console.log('Movements response:', data);
    });
  }

  getMovements() {
    this.miniBanking.getMovements().then((data) => {
      console.log('Movements response:', data); 
    } ).catch((error) => {
      console.error('Error fetching movements:', error);
    });
  }
}
