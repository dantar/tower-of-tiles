export class TileModel {

  static hiddenTile(n: string): TileModel {
    const tile = new TileModel();
    tile.name = n;
    tile.state = 'hidden';
    return tile;
  }

  name: string;
  state: 'gone' | 'hidden' | 'shown';
}
