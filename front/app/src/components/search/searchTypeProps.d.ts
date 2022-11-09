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
