import React, { useEffect, useState } from "react";
import Player from "./Components/Player";
import { playlists$, users$, discoverWeekly$ } from "./store";
import "./App.css";
import { DiscoverWeekly, Item, User } from "./contracts";

function App() {
  const [playlists, setPlaylists] = useState<null | Item[]>(null);
  const [user, setUser] = useState<null | User[]>(null);
  const [discoverWeekly, setDiscoverWeekly] = useState<null | DiscoverWeekly>(null);


  useEffect(() => {
    const playlistsSubscription = playlists$.subscribe((data: Item[] | null) => {
      setPlaylists(data);
    });
    const usersSubscription = users$.subscribe((data: User[]) => {
      setUser(data);
    });
    const discoverWeeklySubscription = discoverWeekly$.subscribe((data: DiscoverWeekly[]) => {
      setDiscoverWeekly(data[0]);
    });

    return () => {
      playlistsSubscription.unsubscribe();
      usersSubscription.unsubscribe();
      discoverWeeklySubscription.unsubscribe();
    };
  }, []);

  if (!user || !discoverWeekly || !playlists) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Player
        discover_weekly={discoverWeekly}
        user={user[0]}
        playlists={playlists}
      />
    </div>
  );
}

export default App;
