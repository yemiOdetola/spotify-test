export interface Root {
  user: User
  playlists: Playlists
  discover_weekly: DiscoverWeekly
}

export interface User {
  display_name: string
  followers: Followers
  images: Image[]
}

export interface Followers {
  href: any
  total: number
}

export interface Image {
  height: any
  url: string
  width: any
}

export interface Playlists {
  items: Item[]
}

export interface Item {
  name: string
}

export interface DiscoverWeekly {
  collaborative: boolean
  description: string
  followers: Followers2
  images: Image2[]
  name: string
  tracks: Tracks
  type: string
  uri: string
}

export interface Followers2 {
  href: any
  total: number
}

export interface Image2 {
  height: number
  url: string
  width: number
}

export interface Tracks {
  items: Item2[]
  limit: number
  next: string
  offset: number
  previous: any
  total: number
}

export interface Item2 {
  added_at: string
  added_by: AddedBy
  is_local: boolean
  primary_color: any
  track: Track
  video_thumbnail: VideoThumbnail
}

export interface AddedBy {
  external_urls: ExternalUrls
  href: string
  id: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Track {
  album: Album
  artists: Artist2[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls5
  href?: string
  id?: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string
  track_number: number
  type: string
  uri: string
  episode?: boolean
  track?: boolean
}

export interface Album {
  album_type?: string
  artists: Artist[]
  external_urls: ExternalUrls3
  href?: string
  id?: string
  images: Image3[]
  name: string
  release_date?: string
  release_date_precision?: string
  type: string
  uri?: string
  total_tracks?: number
}

export interface Artist {
  external_urls: ExternalUrls2
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls2 {
  spotify: string
}

export interface ExternalUrls3 {
  spotify?: string
}

export interface Image3 {
  height: number
  url: string
  width: number
}

export interface Artist2 {
  external_urls: ExternalUrls4
  href?: string
  id?: string
  name: string
  type: string
  uri?: string
}

export interface ExternalUrls4 {
  spotify?: string
}

export interface ExternalIds {
  isrc?: string
}

export interface ExternalUrls5 {
  spotify?: string
}

export interface VideoThumbnail {
  url: any
}
