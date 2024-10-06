import { BehaviorSubject } from "rxjs";
import { DiscoverWeekly, Playlists, Track, User } from "./contracts";

export const playlists$ = new BehaviorSubject<Playlists["items"] | null>(null);
export const users$ = new BehaviorSubject<User[]>([]);
export const discoverWeekly$ = new BehaviorSubject<DiscoverWeekly[]>([]);

export const currentTrack$ = new BehaviorSubject<Track | null>(null);
export const currentTrackIndex$ = new BehaviorSubject<number | null>(null);
export const isPlaying$ = new BehaviorSubject<boolean>(false);
export const volume$ = new BehaviorSubject<number>(50);

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const usersData = [data.user];
    const playlistsData = data.playlists.items;
    const discoverWeeklyData = [data.discover_weekly];

    users$.next(usersData);
    playlists$.next(playlistsData);
    discoverWeekly$.next(discoverWeeklyData);
  })
  .catch((error) => console.error("Error loading data:", error));
