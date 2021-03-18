import { Track } from 'app/contracts';

export function randomTracksExcluding(exclude: string, amount: number, tracks: Track[]): Track[] {
  let randomTracks: Track[] = [];
  let taken: number[] = [];

  for (let i = 0; i < amount; i++) {
    let current: number;

    do {
      current = Math.floor(Math.random() * tracks.length);
    } while (taken.indexOf(current) >= 0 || tracks[current].id === exclude);

    taken.push(current);
    randomTracks.push(tracks[current]);
  }

  return randomTracks;
}
