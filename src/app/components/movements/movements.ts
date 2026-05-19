import { Component, signal } from '@angular/core';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movements',
  imports: [CommonModule, RouterLink],
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

  deleteLastMovement() {
    const movements = this.movements();
    if (movements && movements.length > 0) {
      const lastMovement = movements[0];
      console.log('Attempting to delete movement:', lastMovement);
      
      this.miniBanking.deleteMovement(lastMovement.id)
        .then(() => {
          console.log('Delete successful');
          return this.getMovements();
        })
        .catch((error) => {
          console.error('Error during deletion:', error);
          this.getMovements();
        });
    }
  }
}
