import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasureChestComponent } from '../treasure-chest/treasure-chest.component';

export interface Treasure {
  id: number;
  found: boolean;
}

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, TreasureChestComponent],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  score = 0;
  treasures: Treasure[] = [
    { id: 1, found: false },
    { id: 2, found: false },
    { id: 3, found: false },
    { id: 4, found: false }
  ];

  onTreasureFound(treasureId: number): void {
    const treasure = this.treasures.find(t => t.id === treasureId);
    if (treasure && !treasure.found) {
      treasure.found = true;
      this.score += 10;
    }
  }
}