import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Header from "../Header";
import SongRow from "../SongRow";
import type { DiscoverWeekly, User } from "../../contracts";

import "./body.styles.css";

interface BodyElement {
  user: User;
  discover_weekly: DiscoverWeekly;
}

function Body({ user, discover_weekly }: BodyElement) {
  return (
    <div className="body">
      <Header user={user} />
      <div className="body_info">
        <img src={discover_weekly?.images?.[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks?.items
          .filter((item) => Boolean(item.track.album.id))
          .map((item, index) => (
            <SongRow key={item.track.id} track={item.track} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Body;
