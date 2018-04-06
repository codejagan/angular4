import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'Gametable',
  styleUrls: ['Gametable.component.css'],
  templateUrl: 'Gametable.component.html',
})
export class GametableComponent {
  displayedColumns = ['game', 'city', 'team'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  game: string;
  city: string;
  team: string;

}

const ELEMENT_DATA: Element[] = [
  {game: 'baseball', city:'kansas', team: 'royals'},
  {game: 'football', city:'pittsburg', team: 'steelers'},
  {game: 'basketball', city:'chicago', team: 'lakers'},

];
