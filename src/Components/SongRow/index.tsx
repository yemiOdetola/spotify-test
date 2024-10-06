import React from "react";

import "./songRow.styles.css";

import { currentTrack$, isPlaying$, currentTrackIndex$ } from "../../store";
import type { Track } from "../../contracts";

interface SongRowElement {
  track: Track;
  index: number;
}

function SongRow({ track, index }: SongRowElement) {

  const playSong = () => {
    currentTrack$.next(track);
    currentTrackIndex$.next(index + 1);
    isPlaying$.next(true);
  };

  return (
    <div className="songRow" onClick={playSong}>
      <img className="songRow_album" src={track.album.images[0].url} alt={track.name} />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist: any) => artist.name).join(", ")} - {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
