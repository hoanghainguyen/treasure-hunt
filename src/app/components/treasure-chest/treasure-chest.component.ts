import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Treasure {
  id: number;
  found: boolean;
}

@Component({
  selector: 'app-treasure-chest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treasure-chest.component.html',
  styleUrls: ['./treasure-chest.component.css']
})
export class TreasureChestComponent {
  @Input() treasure!: Treasure;
  @Output() treasureFound = new EventEmitter<number>();

  onClick(): void {
    if (!this.treasure.found) {
      console.log("this.treasure.id "+ this.treasure.id)
      this.treasureFound.emit(this.treasure.id);
    }
  }
}