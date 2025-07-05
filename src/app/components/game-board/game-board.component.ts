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
    { id: 2, found: true },
    { id: 3, found: false },
    { id: 4, found: false },
    { id: 5, found: true },
    { id: 6, found: true },
    { id: 7, found: false },
    { id: 8, found: false } ,
    { id: 9, found: false } ,
    { id: 10, found: false } ,
    { id: 11, found: false } ,
    { id: 12, found: false } ,
    { id: 13, found: true } ,
    { id: 14, found: false } ,
    { id: 15, found: false } ,


  ];

  onTreasureFound(treasureId: number): void {
    const treasure = this.treasures.find(t => t.id === treasureId);
    if (treasure && !treasure.found) {
      treasure.found = true;
      this.score += 10;
    }
  }
}