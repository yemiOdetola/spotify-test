export interface TrackRoot {
  added_at: string;
  added_by: Addedby;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: Videothumbnail;
}

interface Videothumbnail {
  url: null;
}

interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Externalurls2;
  external_urls: Externalurls2;
  href: null;
  id: null;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null;
  track_number: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: Externalurls2;
  href: null;
  id: null;
  name: string;
  type: string;
  uri: null;
}

interface Album {
  album_type: null;
  artists: any[];
  external_urls: Externalurls2;
  href: null;
  id: null;
  images: any[];
  name: string;
  release_date: null;
  release_date_precision: null;
  type: string;
  uri: null;
}

interface Externalurls2 {}

interface Addedby {
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Externalurls {
  spotify: string;
}
