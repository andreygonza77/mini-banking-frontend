import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiniBanking } from '../../services/mini-banking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movement-details',
  imports: [CommonModule],
  templateUrl: './movement-details.html',
  styleUrl: './movement-details.css',
})
export class MovementDetails implements OnInit {
  movement = signal<any | null>(null);

  constructor(private route: ActivatedRoute, private miniBanking: MiniBanking) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : NaN;
      console.log('MovementDetails: route id param =', id);
      if (!isNaN(id) && id > 0) {
        this.getMovementDetails(id);
      }
    });
  }

  getMovementDetails(id: number) {
    this.miniBanking.getMovementDetails(id)
      .then((data) => {
        console.log('Movement detail response:', data);
        this.movement.set(data);
      })
      .catch((err) => console.error('Error fetching movement detail:', err));
  }
}
