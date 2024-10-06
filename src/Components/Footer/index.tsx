import React, { ChangeEvent, useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import "./footer.styles.css";

import { currentTrack$, isPlaying$, volume$, currentTrackIndex$, discoverWeekly$ } from "../../store";


const isValidTrack = (track: any) => track && track.id && track.name;

function Footer() {

  const [volume, setVolume] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [playlistTracks, setPlaylistTracks] = useState<any[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);

  const useSubscriptions = () => {
    useEffect(() => {
      const subscriptions = [
        currentTrack$.subscribe(setCurrentTrack),
        isPlaying$.subscribe(setIsPlaying),
        volume$.subscribe(setVolume),
        currentTrackIndex$.subscribe(setCurrentTrackIndex),
        discoverWeekly$.subscribe((playlist) => {
          if (playlist.length > 0) {
            setPlaylistTracks(playlist[0].tracks.items);
          }
        }),
      ];

      return () => {
        subscriptions.forEach((subscription) => subscription.unsubscribe());
      };
    }, []);
  };

  useSubscriptions();

  const handlePlayPause = () => isPlaying$.next(!isPlaying);


  const handleVolumeChange = (_event: ChangeEvent<{}>, newValue: number | number[]) => {
    volume$.next(newValue as number);
  };

  const skipToTrack = (indexUpdater: (index: number) => number, boundaryCheck: (index: number) => boolean) => {
    if (currentTrackIndex !== null && boundaryCheck(currentTrackIndex)) {
      let newIndex = indexUpdater(currentTrackIndex);
      let newTrack = playlistTracks[newIndex]?.track;

      while (!isValidTrack(newTrack) && boundaryCheck(newIndex)) {
        newIndex = indexUpdater(newIndex);
        newTrack = playlistTracks[newIndex]?.track;
      }

      if (isValidTrack(newTrack)) {
        currentTrack$.next(newTrack);
        currentTrackIndex$.next(newIndex);
        isPlaying$.next(true);
      }
    }
  };

  const handleSkipNext = () => {
    skipToTrack((index) => index + 1, (index) => index < playlistTracks.length - 1);
  };

  const handleSkipPrevious = () => {
    skipToTrack((index) => index - 1, (index) => index > 0);
  };

  return (
    <div className="footer">
      <div className="footer_left">
        {currentTrack && (
          <>
            <img className="footer_albumLogo" src={currentTrack.album.images[0]?.url} alt={currentTrack.name} />
            <div className="footer_songInfo">
              <h1>{currentTrack.name}</h1>
              <p>{currentTrack.artists.map((artist: any) => artist.name).join(", ")}</p>
            </div>
          </>
        )}
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" onClick={handleSkipPrevious} />
        {isPlaying ? (
          <PauseCircleOutlineIcon fontSize="large" className="footer_icon" onClick={handlePlayPause} />
        ) : (
          <PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={handlePlayPause} />
        )}
        <SkipNextIcon className="footer_icon" onClick={handleSkipNext} />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider value={volume} onChange={handleVolumeChange} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
