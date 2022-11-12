import useQueryTracks from '../hooks/useQueryTracks'

/* ---------------------------- Search.tsx ---------------------------- */
export interface SearchProps {
  token: string
  wordFormData: string
}
export interface SelectedTrackProps {
  trackId: string
  trackName: string
  trackArtistId: string
  trackArtistName: string
  trackArtworkUrl: string
  trackPopularity: number
  length?: number
}
export interface SelectedRecommendProps {
  reTrackId: string
  reTrackName: string
  reTrackPopularity: number
  reTrackArtwork: string
}
/* ---------------------------- ParamsGraph.tsx ---------------------------- */
export interface ParamsProps {
  FirstPopularity: number
  FirstLoudness: number
  FirstTempo: number
  FirstValence: number
  FirstDanceAbility: number
  FirstEnergy: number
  RePopularity: number
  ReLoudness: number
  ReTempo: number
  ReValence: number
  ReDanceAbility: number
  ReEnergy: number
  trackName: string
  reTrackName: string
}
/* ---------------------------- TrackCard.tsx ---------------------------- */
export interface TrackCardProps {
  artistName: string
  artworkUrl: string
  trackName: string
  previewUrl: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  playSrc: string
  setPlaySrc: React.Dispatch<React.SetStateAction<string>>
}
/* ---------------------------- Forms ---------------------------- */
// useArtistParams.ts
// 引数型
export interface ArtistParamsProps {
  token: string
  artistId: string
}
// state型
export interface ArtistInfoProps {
  external_urls: object
  followers: object
  genres: string
  href: string
  id: string
  images: object
  name: string
  popularity: number
  type: string
  uri: string
  length?: number
}
// useQueryTracks.ts
export interface QueryTracksProps {
  token: string
  wordFormData: string
}
// useRecommend.ts
export interface RecommendProps {
  token: string
  trackId: string
  artistId: string
  artistGenres: string
}
// useReTrackParams.ts
export interface ReTrackParamsProps {
  token: string
  reTrackId: string
}
// useTrackParams.ts
export interface TrackParamsProps {
  token: string
  trackId: string
}
