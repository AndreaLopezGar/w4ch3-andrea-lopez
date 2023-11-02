import { Character, Fighter } from '../src/models/character';
import { King } from '../src/models/character';
import { Squire } from '../src/models/character';
import { Adviser } from '../src/models/character';

export type AnyCharacter = King | Fighter | Adviser | Squire;

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getCharacters(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
